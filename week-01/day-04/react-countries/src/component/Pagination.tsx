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
  const goToPage = (page: number) => {
    const safePage = Math.max(1, Math.min(page, totalPages));
    onPageChange(safePage);
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => goToPage(1)}>
        ⏮ First
      </button>

      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        ◀ Prev
      </button>

      <span>
        Page {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next ▶
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(totalPages)}
      >
        Last ⏭
      </button>
    </div>
  );
}
