import React from "react";

type FilterDropdownProps = {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
};

export default function FilterDropdown({
  regions,
  selectedRegion,
  onSelectRegion,
}: FilterDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectRegion(event.target.value);
  };
  return (
    <label>
      Filter by Region:
      <select value={selectedRegion} onChange={handleChange}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  );
}
