import { useMemo } from "react";
import type { Country } from "../types/Country";

export const useRegions = (countries: Country[]) => {
  const regions = useMemo(() => {
    const regionSet = new Set<string>();
    countries.forEach((country) => {
      if (country.region) {
        regionSet.add(country.region);
      }
    });
    return Array.from(regionSet).sort();
  }, [countries]);

  // Get all countries in a region
  const getCountriesByRegion = (region: string): Country[] => {
    return countries.filter((country) => country.region === region);
  };
  return { regions, getCountriesByRegion };
};
