import type { Country } from "../types/Country";
import { useMemo, useState } from "react";
import CountryRow from "./CountryRow";
import TableHeader from "./TableHeader";
import FilterDropdown from "./FilterDropdown";
import type { TableColumn } from "../types/TableColumn";

//Use not a type but an interface?
type tableProps = {
  countries: Array<Country>;
};

export default function CountryTable({ countries }: tableProps) {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Build the list of regions from the countries list
  const regions = useMemo(() => {
    const set = new Set<string>();
    countries.forEach((country) => country.region && set.add(country.region));
    return ["All", ...Array.from(set).sort()];
  }, [countries]);

  const filteredCountries =
    // MAGIC NUMBER ?!?!?!
    selectedRegion === "All"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  // Just use to sort countries based on sortConfig.  This should use a useMemo instead
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let aValue: string | number;
    let bValue: string | number;

    switch (sortConfig.key) {
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
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // // Reset to first page when countries or filter changes
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [sortedCountries]);
  const totalPages = Math.ceil(countries.length / itemsPerPage);

  const pagedCountries = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedCountries.slice(start, end);
  }, [currentPage, sortedCountries]);

  const columns: TableColumn[] = [
    { key: "Name", label: "Name", sortable: true },
    { key: "Region", label: "Region", sortable: true },
    { key: "Population", label: "Population", sortable: true },
    { key: "Flag", label: "Flag", sortable: false },
  ];
  const onRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };
  const requestSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  return (
    <>
      <FilterDropdown
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={onRegionChange}
      />
      <table>
        <TableHeader
          columns={columns}
          requestSort={requestSort}
          sortConfig={sortConfig}
        />
        <tbody>
          {pagedCountries.map((country) => (
            <CountryRow key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
          ⏮ First
        </button>

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ◀ Prev
        </button>

        <span>
          Page {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next ▶
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last ⏭
        </button>
      </div>
    </>
  );
}
