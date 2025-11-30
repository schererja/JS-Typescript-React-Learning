import React from "react";
import type { Country } from "../types/Country";
import CountryFlag from "./CountryFlag";
import { formatNumber } from "../utils/formatters";

interface CountryRowProps {
  country: Country;
}

function CountryRow({ country }: CountryRowProps) {
  return (
    <tr tabIndex={0} className="country-row">
      <td scope="row">{country.name.common}</td>
      <td>{country.region}</td>
      <td
        style={{ textAlign: "right" }}
        title={`Population: ${formatNumber(country.population)}`}
      >
        {formatNumber(country.population)}
      </td>
      <td style={{ textAlign: "center" }}>
        <CountryFlag srcUrl={country.flags.png} name={country.name.common} />
      </td>
    </tr>
  );
}
// Use React.memo to prevent unnecessary re-renders
export default React.memo(CountryRow);
