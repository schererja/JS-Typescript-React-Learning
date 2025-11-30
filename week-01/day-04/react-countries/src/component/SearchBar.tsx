interface SearchBarProps {
  rawInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  placeholder?: string;
}

export default function SearchBar({
  rawInput,
  onChange,
  id = "country-search",
  label = "Search countries",
  placeholder = "Search countries...",
}: SearchBarProps) {
  return (
    <div className="searchbar">
      <label htmlFor={id} style={{ textAlign: "left" }}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={rawInput}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        autoCorrect="off"
        aria-label={label}
        className="searchbar-input"
      />
    </div>
  );
}
