import type { Country } from "../types/Country";

export async function getCountries(): Promise<Country[] | undefined> {
  const countryResponse = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca2,flags,population,region"
  );
  if (countryResponse.ok) {
    return countryResponse.json();
  }
}
