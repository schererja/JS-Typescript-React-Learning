interface SearchBarProps {
  rawInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ rawInput, onChange }: SearchBarProps) {
  return (
    <>
      <label htmlFor="country-search" style={{ textAlign: "left" }}>
        Search countries
      </label>
      <input
        id="country-search"
        type="text"
        placeholder="Search countries..."
        value={rawInput}
        onChange={onChange}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        aria-label="Search countries"
      />
    </>
  );
}
