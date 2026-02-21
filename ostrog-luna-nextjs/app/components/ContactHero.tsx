"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import type { Dictionary } from "../i18n";

type Props = {
  dict: Dictionary["contactUs"];
};

export default function ContactHero({ dict }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-white";

  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section title */}
        <p className="text-sm font-bold tracking-widest text-primary mb-1">{dict.hero.label}</p>
        <div className="flex items-center gap-4 mb-2">
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h1 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {dict.hero.title}
          </h1>
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>
        <p className="text-primary mb-6 sm:mb-10 sm:text-center">{dict.hero.subtitle}</p>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            {status === "success" ? (
              <div className="border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
                <p className="text-xl font-bold text-primary mb-2">{dict.form.successTitle}</p>
                <p className="text-gray-500">{dict.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 bg-gray-50">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder={dict.form.namePlaceholder}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder={dict.form.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  placeholder={dict.form.emailPlaceholder}
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  placeholder={dict.form.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-0.5 shrink-0 accent-primary"
                    />
                    <span>{dict.form.consent}</span>
                  </label>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 bg-primary text-secondary font-semibold px-10 py-3 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? dict.form.sending : dict.form.send}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">{dict.form.errorMessage}</p>
                )}
              </form>
            )}
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-512/481">
              <Image
                src="/contact-hero.png"
                alt="Biser sunflower oil bottles"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
