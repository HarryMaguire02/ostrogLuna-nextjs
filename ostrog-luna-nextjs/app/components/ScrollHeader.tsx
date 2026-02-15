"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import type { Dictionary, Locale } from "../i18n";

export default function ScrollHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 hover:bg-white shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <Header lang={lang} dict={dict} />
    </div>
  );
}
