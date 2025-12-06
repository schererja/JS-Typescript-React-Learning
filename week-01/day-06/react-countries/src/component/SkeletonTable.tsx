interface SkeletonTableProps {
  rows?: number;
  columns?: number;
}
const columnWidths = ["50px", "200px", "150px"];

export default function SkeletonTable({
  rows = 5,
  columns = 3,
}: SkeletonTableProps) {
  return (
    <table className="skeleton-table">
      <thead>
        <tr>
          {Array.from({ length: columns }).map((_, index) => (
            <th key={index} style={{ width: columnWidths[index] || "150px" }}>
              <div className="skeleton-box" style={{ height: "20px" }} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, index) => (
          <tr key={index}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td
                key={colIndex}
                style={{ width: columnWidths[colIndex] || "150px" }}
              >
                <div className="skeleton-box" style={{ height: "20px" }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
