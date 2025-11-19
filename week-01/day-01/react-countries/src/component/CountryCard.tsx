import type { Country } from "../models/Country";
import CountryFlag from "./CountryFlag";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div className="card">
      <CountryFlag srcUrl={country.flags.png} name={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>
        <strong>Region:</strong> {country.region}
        <br />
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
}
