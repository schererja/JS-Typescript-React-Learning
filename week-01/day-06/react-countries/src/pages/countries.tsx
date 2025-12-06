import React, { useEffect, useRef } from "react";
import "../App.css";
import CountryTable from "../component/CountryTable";
import { useCountries } from "../hooks/useCountries";
import ErrorState from "../component/ErrorState";
import SkeletonTable from "../component/SkeletonTable";

const Countries: React.FC = () => {
  const { countries, loading, error, retry } = useCountries();
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  if (loading)
    return (
      <div className="cards-container">
        <h2>Countries</h2>
        <SkeletonTable rows={10} columns={3} />
      </div>
    );
  if (error) return <ErrorState message={error} onRetry={retry} />;
  return (
    <div className="cards-container">
      <h2>Countries</h2>
      <CountryTable countries={countries} />
    </div>
  );
};

export default Countries;
