import { useEffect, useState } from "react";
import { getCountries } from "../services/CountriesService";
import type { Country } from "../types/Country";

interface UseCountriesResult {
  countries: Country[];
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useCountries(): UseCountriesResult {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCountries();
      setCountries(data || []);
    } catch (err: Error | null | unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError("Failed to load countries: " + message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  return { countries, loading, error, retry: load };
}
