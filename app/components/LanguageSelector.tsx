"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "../i18n/LocaleProvider";
import { localeNames, localeShort, locales, type Locale } from "../i18n/dictionary";
import { CheckIcon, ChevronDownIcon, GlobeIcon } from "../icons";

export function LanguageSelector() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lang-selector" ref={ref}>
      <button
        type="button"
        className="lang-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.languageLabel}
        onClick={() => setOpen(o => !o)}
      >
        <GlobeIcon />
        <span className="lang-code">{localeShort[locale]}</span>
        <ChevronDownIcon className="lang-caret" />
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t.languageLabel}>
          {locales.map(l => {
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className="lang-option"
                  data-active={active}
                  onClick={() => {
                    setLocale(l as Locale);
                    setOpen(false);
                  }}
                >
                  <span className="lang-option-code">{localeShort[l]}</span>
                  <span className="lang-option-name">{localeNames[l]}</span>
                  <span className="lang-option-check" aria-hidden="true">
                    {active && <CheckIcon />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
