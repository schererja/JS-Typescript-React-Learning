// src/components/CountryTable.tsx

import type { Country } from "../types/Country";
import { useMemo, useCallback, useState } from "react";
import CountryRow from "./CountryRow";
import TableHeader from "./TableHeader";
import FilterDropdown from "./FilterDropdown";
import Pagination from "./Pagination";

import { useFilteredCountries } from "../hooks/useFilteredCountries";
import { useSortedCountries, type SortKey } from "../hooks/useSortedCountries";
import { useRegions } from "../hooks/useRegions";
import { usePagination } from "../hooks/usePagination";
import type { TableColumn } from "../types/TableColumn";

interface TableProps {
  countries: Array<Country>;
}

export default function CountryTable({ countries }: TableProps) {
  //
  // 1. REGION FILTER
  //
  const { regions } = useRegions(countries);
  const [selectedRegion, setSelectedRegion] = useState("All");

  //
  // 2. FILTER COUNTRIES
  //
  const filteredCountries = useFilteredCountries(countries, {
    region: selectedRegion,
    searchTerm: "",
    allRegionValue: "All",
  });

  //
  // 3. SORTING
  //
  const [sortConfig, setSortConfig] = useState({
    key: "" as SortKey,
    direction: "ascending" as "ascending" | "descending" | "",
  });

  const sortedCountries = useSortedCountries(filteredCountries, sortConfig);
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    sortedCountries,
    10
  );

  const requestSort = useCallback(
    (key: SortKey) => {
      let direction: "ascending" | "descending" = "ascending";

      if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
      }

      setSortConfig({ key, direction });
      goToPage(1);
    },
    [sortConfig.key, sortConfig.direction, goToPage]
  );

  //
  // 4. PAGINATION
  //

  //
  // 5. COLUMNS
  //
  const columns: TableColumn[] = useMemo(
    () => [
      { key: "Name", label: "Name", sortable: true },
      { key: "Region", label: "Region", sortable: true },
      { key: "Population", label: "Population", sortable: true },
      { key: "Flag", label: "Flag", sortable: false },
    ],
    []
  );

  //
  // 6. HANDLERS
  //
  const onRegionChange = useCallback(
    (region: string) => {
      setSelectedRegion(region);
      goToPage(1);
    },
    [goToPage]
  );

  return (
    <>
      {/* FILTER DROPDOWN */}
      <FilterDropdown
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={onRegionChange}
      />

      {/* TABLE */}
      <table>
        <TableHeader
          columns={columns}
          requestSort={requestSort}
          sortConfig={sortConfig}
        />

        <tbody>
          {currentItems.map((country) => (
            <CountryRow key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </>
  );
}
