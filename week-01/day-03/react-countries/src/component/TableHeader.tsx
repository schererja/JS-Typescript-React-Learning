import type { TableColumn } from "../types/TableColumn";

type TableHeaderProps = {
  columns?: Array<TableColumn>;
  requestSort?: (key: string) => void;
  sortConfig?: { key: string; direction: string };
};

export default function TableHeader({
  columns,
  requestSort,
  sortConfig,
}: TableHeaderProps) {
  return (
    <thead>
      {columns ? (
        <tr>
          {columns.map((column) => (
            <th key={column.key} onClick={() => requestSort(column.key)}>
              {column.label}
              {sortConfig?.key === column.key
                ? sortConfig.direction === "ascending"
                  ? " ▲"
                  : " ▼"
                : null}
            </th>
          ))}
        </tr>
      ) : (
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th>Population</th>
          <th>Flag</th>
        </tr>
      )}
    </thead>
  );
}
