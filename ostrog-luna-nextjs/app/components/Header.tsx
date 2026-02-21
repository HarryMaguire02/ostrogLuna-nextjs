"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import type { Dictionary, Locale } from "../i18n";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLangOpenMobile, setIsLangOpenMobile] = useState(false);
  const pathname = usePathname();

  const prefix = lang === "en" ? "" : `/${lang}`;

  const navLinks = [
    { href: `${prefix}/`, label: dict.nav.home },
    { href: `${prefix}/about-us`, label: dict.nav.aboutUs },
    { href: `${prefix}/biser-oil`, label: dict.nav.biserOil },
    { href: `${prefix}/packing`, label: dict.nav.packing },
    { href: `${prefix}/work-with-us`, label: dict.nav.workWithUs },
    { href: `${prefix}/contact-us`, label: dict.nav.contactUs },
  ];

  // Strip /en or /mk prefix from internal pathname
  const cleanPath = pathname.replace(/^\/(en|mk)/, "") || "/";

  const languages = [
    { code: "en" as Locale, label: "EN", flag: "/english-flag.png", href: cleanPath },
    { code: "mk" as Locale, label: "MK", flag: "/macedonian-flag.png", href: `/mk${cleanPath === "/" ? "" : cleanPath}` },
  ];

  const currentLang = languages.find((l) => l.code === lang)!;

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`${prefix}/`} className="shrink-0">
            <Image
              src="/ostrog-luna-logo.png"
              alt="Ostrog Luna - Sunflower Oil Producer"
              width={180}
              height={50}
              priority
              className="h-8 sm:h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive
                        ? "text-secondary"
                        : "text-primary hover:text-secondary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Language Dropdown - desktop only */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center justify-center border border-primary bg-primary/10 px-1 py-1 transition-colors ${
                  isLangOpen ? "rounded-t-md border-b-0" : "rounded-md"
                }`}
                aria-expanded={isLangOpen}
                aria-haspopup="true"
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={41}
                  height={25}
                  className="w-8 h-5 rounded-sm object-cover"
                />
                <svg
                  className={`ml-1 w-3 h-3 text-primary transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4.5L6 8.5L10 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 w-full bg-primary/10 rounded-b-md shadow-lg border border-primary border-t-0 overflow-hidden">
                  {languages
                    .filter((l) => l.code !== lang)
                    .map((l) => (
                      <Link
                        key={l.code}
                        href={l.href}
                        className="flex items-center justify-start px-1 py-1"
                        onClick={() => setIsLangOpen(false)}
                      >
                        <Image
                          src={l.flag}
                          alt={l.label}
                          width={41}
                          height={25}
                          className="w-8 h-5 rounded-sm object-cover"
                        />
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              type="button"
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation - Slides down (edge-to-edge) */}
      <nav
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col bg-white/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium text-center transition-colors border-b border-gray-100 ${
                    isActive
                      ? "text-secondary bg-secondary/10"
                      : "text-primary hover:bg-secondary/10 hover:text-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          {/* Mobile Language Dropdown */}
          <li className="flex justify-center pt-3 pb-9">
            <div className="relative">
              <button
                type="button"
                className={`flex items-center justify-center border border-primary bg-primary/10 px-1 py-1 transition-colors ${
                  isLangOpenMobile ? "rounded-t-md border-b-transparent" : "rounded-md"
                }`}
                onClick={() => setIsLangOpenMobile(!isLangOpenMobile)}
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={41}
                  height={25}
                  className="w-8 h-5 rounded-sm object-cover"
                />
                <svg
                  className={`ml-1 w-3 h-3 text-primary transition-transform duration-200 ${
                    isLangOpenMobile ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4.5L6 8.5L10 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isLangOpenMobile && (
                <div className="absolute right-0 w-full bg-primary/10 rounded-b-md shadow-lg border border-primary border-t-0 overflow-hidden">
                  {languages
                    .filter((l) => l.code !== lang)
                    .map((l) => (
                      <Link
                        key={l.code}
                        href={l.href}
                        className="flex items-center justify-start px-1 py-1"
                        onClick={() => {
                          setIsLangOpenMobile(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <Image
                          src={l.flag}
                          alt={l.label}
                          width={41}
                          height={25}
                          className="w-8 h-5 rounded-sm object-cover"
                        />
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
