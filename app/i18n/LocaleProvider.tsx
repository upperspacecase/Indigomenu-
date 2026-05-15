"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  dictionary,
  filterAllergenMap,
  type Dictionary,
  type Locale,
  locales,
} from "./dictionary";

type FilterKey = keyof Dictionary["diet"];

type LocaleCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
  // copy resolver: returns the dish text in the active locale, falling back to en.
  // for non-pt/non-en locales, en is shown (mockup behavior).
  resolveCopy: (input: { pt?: string; en?: string }) => string | undefined;
  // diet filters
  activeFilters: FilterKey[];
  toggleFilter: (f: FilterKey) => void;
  clearFilters: () => void;
  isAllergensFiltered: (allergens?: string[]) => boolean;
};

const Ctx = createContext<LocaleCtx | null>(null);

const STORAGE_KEY = "indigo-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [activeFilters, setActiveFilters] = useState<FilterKey[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && (locales as readonly string[]).includes(stored)) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const nav = window.navigator.language?.slice(0, 2).toLowerCase() as Locale;
      if (nav && (locales as readonly string[]).includes(nav)) {
        setLocaleState(nav);
        document.documentElement.lang = nav;
      }
    } catch {
      /* localStorage may be unavailable */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  }, []);

  const resolveCopy = useCallback(
    (input: { pt?: string; en?: string }) => {
      if (locale === "pt") return input.pt ?? input.en;
      return input.en ?? input.pt;
    },
    [locale],
  );

  const toggleFilter = useCallback((f: FilterKey) => {
    setActiveFilters(arr => (arr.includes(f) ? arr.filter(x => x !== f) : [...arr, f]));
  }, []);

  const clearFilters = useCallback(() => setActiveFilters([]), []);

  const isAllergensFiltered = useCallback(
    (allergens?: string[]) => {
      if (activeFilters.length === 0) return false;
      // An item is filtered out when it CONTAINS any allergen targeted by an
      // active filter chip (e.g. "Gluten-free" hides items whose allergens
      // include "gluten"). Items without an allergens list are kept.
      if (!allergens || allergens.length === 0) return false;
      return activeFilters.some(f => allergens.includes(filterAllergenMap[f]));
    },
    [activeFilters],
  );

  const value = useMemo<LocaleCtx>(
    () => ({
      locale,
      setLocale,
      t: dictionary[locale],
      resolveCopy,
      activeFilters,
      toggleFilter,
      clearFilters,
      isAllergensFiltered,
    }),
    [locale, setLocale, resolveCopy, activeFilters, toggleFilter, clearFilters, isAllergensFiltered],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
