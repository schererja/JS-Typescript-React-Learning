import React from "react";

interface FilterDropdownProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

export default function FilterDropdown({
  regions,
  selectedRegion,
  onSelectRegion,
}: FilterDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectRegion(event.target.value);
  };
  const options = React.useMemo(
    () =>
      regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      )),
    [regions]
  );
  return (
    <div>
      <label htmlFor="region-select">Filter by Region:</label>
      <select
        id="region-select"
        value={selectedRegion}
        onChange={handleChange}
        aria-label="Filter Countries by region"
      >
        <option value="">All Regions</option>
        {options}
      </select>
    </div>
  );
}
