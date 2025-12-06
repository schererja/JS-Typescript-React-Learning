import React from "react";
import type { Country } from "../types/Country";
import CountryFlag from "./CountryFlag";
import { formatNumber } from "../utils/formatters";

interface CountryRowProps {
  country: Country;
  highlightTerm?: string;
}
// Utility to escape regex special chars
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedText({ text, query }: { text: string; query?: string }) {
  const q = (query ?? "").trim();
  if (!q) return <>{text}</>;

  const regex = new RegExp(`(${escapeRegExp(q)})`, "ig");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
function CountryRow({ country, highlightTerm }: CountryRowProps) {
  return (
    <tr tabIndex={0} className="country-row">
      <td data-label="Name" scope="row">
        {" "}
        <HighlightedText text={country.name.common} query={highlightTerm} />
      </td>
      <td data-label="Region">{country.region}</td>
      <td
        data-label="Population"
        style={{ textAlign: "right" }}
        title={`Population: ${formatNumber(country.population)}`}
      >
        {formatNumber(country.population)}
      </td>
      <td data-label="Flag" style={{ textAlign: "center" }}>
        <CountryFlag srcUrl={country.flags.png} name={country.name.common} />
      </td>
    </tr>
  );
}
// Use React.memo to prevent unnecessary re-renders
export default React.memo(CountryRow);
