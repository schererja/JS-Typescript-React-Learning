import type { Country } from "../types/Country";
import { useMemo } from "react";

interface FilterOptions {
  region: string;
  searchTerm: string;
  allRegionValue?: string;
}

export const useFilteredCountries = (
  countries: Country[],
  { region, searchTerm, allRegionValue = "All" }: FilterOptions
) => {
  const filtered = useMemo(() => {
    let result = countries;
    // Apply search term filter by region
    if (region !== allRegionValue) {
      result = result.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }
    // 2. filter by search term
    if (searchTerm.trim() !== "") {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(lowerSearchTerm)
      );
    }
    return result;
  }, [countries, searchTerm, region, allRegionValue]);

  return filtered;
};
