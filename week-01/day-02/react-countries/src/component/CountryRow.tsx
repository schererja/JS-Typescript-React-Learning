import type { Country } from "../models/Country";
import CountryFlag from "./CountryFlag";

export default function CountryRow({ country }: { country: Country }) {
  return (
    <tbody>
      <tr key={country.cca2}>
        <td>{country.name.common}</td>
        <td>{country.region}</td>
        <td>{country.population.toLocaleString()}</td>
        <td style={{ textAlign: "center" }}>
          <CountryFlag srcUrl={country.flags.png} name={country.name.common} />
        </td>
      </tr>
    </tbody>
  );
}
