import type { SortKey } from "../hooks/useSortedCountries";

export interface TableColumn {
  key: SortKey | "Flag"; // unique identifier (matches Country property)
  label: string; // display name
  sortable?: boolean; // can this column be sorted?
}
