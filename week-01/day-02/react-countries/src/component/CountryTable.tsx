import type { Country } from "../models/Country";
import { useMemo, useState } from "react";
import CountryRow from "./CountryRow";
import TableHeader from "./TableHeader";
import FilterDropdown from "./FilterDropdown";
import type { TableColumn } from "../models/TableColumn";

type tableProps = {
  countries: Array<Country>;
};

export default function CountryTable(tableProps: tableProps) {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  // const columns = ["Name", "Region", "Population", "Flag"];
  const columns: TableColumn[] = [
    { key: "Name", label: "Name", sortable: true },
    { key: "Region", label: "Region", sortable: true },
    { key: "Population", label: "Population", sortable: true },
    { key: "Flag", label: "Flag", sortable: false },
  ];
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = useMemo(() => {
    const set = new Set<string>();
    tableProps.countries.forEach(
      (country) => country.region && set.add(country.region)
    );
    return ["All", ...Array.from(set).sort()];
  }, [tableProps.countries]);

  const { countries } = tableProps;

  const filteredCountries =
    selectedRegion === "All"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Just use to sort countries based on sortConfig
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
  return (
    <>
      <FilterDropdown
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />
      <table>
        <TableHeader
          columns={columns}
          requestSort={requestSort}
          sortConfig={sortConfig}
        />
        {sortedCountries.map((country) => (
          <CountryRow key={country.cca2} country={country} />
        ))}
      </table>
    </>
  );
}
