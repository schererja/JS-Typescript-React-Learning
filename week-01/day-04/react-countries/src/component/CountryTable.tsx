// src/components/CountryTable.tsx

import type { Country } from "../types/Country";
import { useMemo, useCallback, useState } from "react";
import CountryRow from "./CountryRow";
import TableHeader from "./TableHeader";
import FilterDropdown from "./FilterDropdown";
import Pagination from "./Pagination";

import { useFilteredCountries } from "../hooks/useFilteredCountries";
import {
  useSortedCountries,
  type SortConfig,
  type SortKey,
} from "../hooks/useSortedCountries";
import { useRegions } from "../hooks/useRegions";
import { usePagination } from "../hooks/usePagination";
import type { TableColumn } from "../types/TableColumn";
import type { SortDirection } from "../types/SortDirection";
import SearchBar from "./SearchBar";

/**
 * Props for the CountryTable component
 */
interface TableProps {
  /** Array of country data to display in the table */
  countries: Array<Country>;
}

/**
 * Main table component that displays country data with filtering, sorting, and pagination.
 *
 * Features:
 * - Region filtering via dropdown
 * - Column sorting (Name, Region, Population)
 * - Pagination with 10 items per page
 * - Responsive table layout with country flags
 */
export default function CountryTable({ countries }: TableProps) {
  //
  // REGION FILTER
  //
  // Extract unique regions from countries data and maintain selected region state
  const { regions } = useRegions(countries);
  const [selectedRegion, setSelectedRegion] = useState("All");

  //
  // Search Term Filter
  //
  const [searchTerm, setSearchTerm] = useState("");

  //
  // FILTER COUNTRIES
  //
  // Apply region filter to the countries list
  // Returns countries matching the selected region, or all if "All" is selected
  const filteredCountries = useFilteredCountries(countries, {
    region: selectedRegion,
    searchTerm: searchTerm,
    allRegionValue: "All",
  });

  //
  // SORTING
  //
  // Maintain sorting state: which column and in what direction
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "" as SortKey,
    direction: "" as SortDirection,
  });

  // Apply sorting to filtered countries using custom hook
  const sortedCountries = useSortedCountries(filteredCountries, sortConfig);

  //
  // PAGINATION
  //
  // Paginate sorted countries (10 per page) and get pagination controls
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    sortedCountries,
    10
  );

  /**
   * Handle column sort requests
   * Toggles between ascending/descending when clicking the same column
   * Defaults to ascending when clicking a new column
   * Resets to first page when sort changes
   */
  const requestSort = useCallback(
    (key: SortKey) => {
      let direction: "ascending" | "descending" = "ascending";

      // If clicking the same column, toggle the direction
      if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
      }

      setSortConfig({ key, direction });
      goToPage(1); // Reset to first page when sorting changes
    },
    [sortConfig.key, sortConfig.direction, goToPage]
  );

  //
  // COLUMNS
  //
  // Define table columns configuration
  // Memoized since this never changes during component lifetime
  const columns: TableColumn[] = useMemo(
    () => [
      { key: "Name", label: "Name", sortable: true },
      { key: "Region", label: "Region", sortable: true },
      { key: "Population", label: "Population", sortable: true },
      { key: "Flag", label: "Flag", sortable: false }, // Flag column is not sortable
    ],
    []
  );

  //
  // HANDLERS
  //
  /**
   * Handle region filter changes
   * Updates selected region and resets to first page
   */
  const onRegionChange = useCallback(
    (region: string) => {
      setSelectedRegion(region);
      goToPage(1); // Reset to first page when filter changes
    },
    [goToPage]
  );

  //
  // RENDER
  //
  return (
    <>
      {/* SEARCH TERM  - Input for filtering countries by name */}
      <SearchBar
        rawInput={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* FILTER DROPDOWN - Region selection UI */}
      <FilterDropdown
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={onRegionChange}
      />

      {/* MAIN TABLE - Displays sorted and paginated country data */}
      <table>
        {/* Table header with sortable column headers */}
        <TableHeader
          columns={columns}
          requestSort={requestSort}
          sortConfig={sortConfig}
        />

        {/* Table body - Render current page of countries */}
        <tbody>
          {currentItems.map((country) => (
            <CountryRow key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>

      {/* PAGINATION CONTROLS - Navigate between pages */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </>
  );
}
