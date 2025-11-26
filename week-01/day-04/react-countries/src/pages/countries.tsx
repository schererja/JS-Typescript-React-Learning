import React, { useEffect, useRef, useState } from "react";
import { getCountries } from "../services/CountriesService";
import "../App.css";
import type { Country } from "../types/Country";
import CountryTable from "../component/CountryTable";
import { useCountries } from "../hooks/userCountries";
import ErrorState from "../component/ErrorState";
import Loading from "../component/Loading";

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

  // useEffect(() => {
  //   getCountries().then((data) => {
  //     console.log("Countries data fetched");
  //     console.log(data);
  //   });
  // }, []);

  const filteredCountries = countries.filter((country: Country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  return (
    <div className="cards-container">
      <h2>Countries</h2>
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
      <CountryTable countries={filteredCountries} />
    </div>
  );
};

export default Countries;
