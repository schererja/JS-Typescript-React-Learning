import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import type { Country } from "../types/Country";
import CountryTable from "../component/CountryTable";
import { useCountries } from "../hooks/userCountries";
import ErrorState from "../component/ErrorState";
import Loading from "../component/Loading";
import SearchBar from "../component/SearchBar";
import EmptyState from "../component/EmtpyState";

const Countries: React.FC = () => {
  const { countries, loading, error, retry } = useCountries();
  const [rawInput, setRawInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debounceRef = useRef<number | null>(null);

  const onChange = (eventTriggered: React.ChangeEvent<HTMLInputElement>) => {
    const value = eventTriggered.target.value;
    setRawInput(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      // Explicit window.setTimeout for browser
      setSearchTerm(value);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const filteredCountries = countries.filter((country: Country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (filteredCountries.length === 0) return <EmptyState />;
  return (
    <div className="cards-container">
      <h2>Countries</h2>
      <SearchBar rawInput={rawInput} onChange={onChange} />
      <CountryTable countries={filteredCountries} />
    </div>
  );
};

export default Countries;
