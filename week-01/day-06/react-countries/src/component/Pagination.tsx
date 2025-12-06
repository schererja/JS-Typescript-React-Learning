import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const goToPage = useMemo(
    () => (page: number) => {
      const safePage = Math.max(1, Math.min(page, totalPages));
      onPageChange(safePage);
    },
    [onPageChange, totalPages]
  );
  // Create numbered page buttons for <= 10 pages, else show first, last, current, prev, next
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pagination" aria-label="Pagination Navigation">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(1)}
        aria-label="Go to first page"
      >
        ⏮ First
      </button>

      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        ◀ Prev
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => goToPage(pageNum)}
          aria-current={pageNum === currentPage ? "page" : undefined}
          className={pageNum === currentPage ? "active" : ""}
        >
          {pageNum}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        aria-label="Go to next page"
      >
        Next ▶
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(totalPages)}
        aria-label="Go to last page"
      >
        Last ⏭
      </button>
    </div>
  );
}
