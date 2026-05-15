"use client";

import { useLocale } from "../i18n/LocaleProvider";
import { filterKeys } from "../i18n/dictionary";
import { CloseIcon } from "../icons";

export function CategoryFilter() {
  const { t, activeFilters, toggleFilter, clearFilters } = useLocale();

  return (
    <div className="filter">
      <div className="filter-label">{t.filter.label}</div>
      <div className="filter-chips">
        {filterKeys.map(key => {
          const isActive = activeFilters.includes(key);
          return (
            <button
              key={key}
              type="button"
              className="filter-chip"
              data-active={isActive}
              aria-pressed={isActive}
              onClick={() => toggleFilter(key)}
            >
              {t.diet[key]}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            type="button"
            className="filter-clear"
            onClick={clearFilters}
            aria-label={t.filter.clear}
          >
            <CloseIcon />
            <span>{t.filter.clear}</span>
          </button>
        )}
      </div>
    </div>
  );
}
