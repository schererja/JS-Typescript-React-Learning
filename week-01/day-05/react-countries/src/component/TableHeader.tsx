import type { SortKey } from "../hooks/useSortedCountries";
import type { SortDirection } from "../types/SortDirection";
import type { TableColumn } from "../types/TableColumn";
import SortIcon from "./SortIcon";

interface TableHeaderProps {
  columns: Array<TableColumn>;
  requestSort: (key: SortKey) => void;
  sortConfig?: { key: SortKey; direction: SortDirection | "" };
}

export default function TableHeader({
  columns,
  requestSort,
  sortConfig,
}: TableHeaderProps) {
  return (
    <thead>
      <tr>
        {columns.map((col) => {
          const isActive = sortConfig?.key === col.key;
          const direction = isActive ? sortConfig?.direction : "";
          const label = col.label;

          if (!col.sortable) {
            return <th key={col.key}>{label}</th>;
          }

          const ariaLabel =
            direction === "ascending"
              ? `Sorted ascending by ${label}. Activate to sort descending.`
              : direction === "descending"
              ? `Sorted descending by ${label}. Activate to sort ascending.`
              : `Not sorted. Activate to sort by ${label}.`;

          return (
            <th key={col.key}>
              <button
                type="button"
                onClick={() => requestSort(col.key as SortKey)}
                aria-label={ariaLabel}
                className={`th-btn ${isActive ? "th-btn-active" : ""}`}
              >
                <span className="th-label">{label}</span>
                <SortIcon
                  direction={direction as SortDirection | ""}
                  className={`th-icon ${isActive ? "th-icon-active" : ""}`}
                />
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
