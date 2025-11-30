import { useMemo } from "react";
import type { Country } from "../types/Country";

export type SortKey = "Name" | "Region" | "Population" | "";
export type SortDirection = "ascending" | "descending" | "";

export interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

export function useSortedCountries(
  countries: Country[],
  sortConfig: SortConfig
) {
  const sorted = useMemo(() => {
    const { key, direction } = sortConfig;
    if (!key || !direction) return [...countries];
    const sortedList = [...countries].sort((a, b) => {
      let aValue: string | number = "";
      let bValue: string | number = "";

      switch (key) {
        case "Name":
          aValue = a.name.common.toLowerCase();
          bValue = b.name.common.toLowerCase();
          break;
        case "Region":
          aValue = a.region.toLowerCase();
          bValue = b.region.toLowerCase();
          break;
        case "Population":
          aValue = a.population;
          bValue = b.population;
          break;
        default:
          return 0;
      }
      if (aValue < bValue) {
        return direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortedList;
  }, [countries, sortConfig]);

  return sorted;
}
