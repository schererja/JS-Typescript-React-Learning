import type { SortKey } from "../hooks/useSortedCountries";
import type { TableColumn } from "../types/TableColumn";

interface TableHeaderProps {
  columns?: Array<TableColumn>;
  requestSort: (key: SortKey) => void;
  sortConfig?: { key: SortKey; direction: "ascending" | "descending" | "" };
}

export default function TableHeader({
  columns,
  requestSort,
  sortConfig,
}: TableHeaderProps) {
  const showSortIcon = (columnKey: string) => {
    if (!sortConfig || sortConfig.key !== columnKey) return null;
    return sortConfig.direction === "ascending" ? " ▲" : " ▼";
  };
  return (
    <thead>
      {(
        columns ?? [
          { key: "Name", label: "Name" },
          { key: "Region", label: "Region" },
          { key: "Population", label: "Population" },
          { key: "Flag", label: "Flag" },
        ]
      ).map((column) => {
        const isSortable = column.sortable ?? true; // Default to true if undefined
        return (
          <th
            key={column.key}
            onClick={
              isSortable
                ? () => isSortable && requestSort(column.key as SortKey)
                : undefined
            }
            style={{ cursor: isSortable ? "pointer" : "default" }}
            aria-sort={
              sortConfig?.key === column.key
                ? sortConfig.direction === "ascending"
                  ? "ascending"
                  : "descending"
                : "none"
            }
          >
            {column.label}
            {isSortable && showSortIcon(column.key)}
          </th>
        );
      })}
    </thead>
  );
}
