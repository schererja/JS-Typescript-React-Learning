interface SearchBarProps {
  value: string;
  onChange: (e: string) => void;
  id?: string;
  label?: string;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  id = "country-search",
  label = "Search countries",
  placeholder = "Search countries...",
}: SearchBarProps) {
  return (
    <div className="searchbar">
      <label htmlFor={id} className="searchbar-label">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
