import React from "react";
import type { Country } from "../types/Country";
import CountryFlag from "./CountryFlag";

interface CountryRowProps {
  country: Country;
}

function CountryRow({ country }: CountryRowProps) {
  return (
    <tr key={country.cca2}>
      <td>{country.name.common}</td>
      <td>{country.region}</td>
      <td>{country.population.toLocaleString()}</td>
      <td style={{ textAlign: "center" }}>
        <CountryFlag srcUrl={country.flags.png} name={country.name.common} />
      </td>
    </tr>
  );
}
// Use React.memo to prevent unnecessary re-renders
export default React.memo(CountryRow);
