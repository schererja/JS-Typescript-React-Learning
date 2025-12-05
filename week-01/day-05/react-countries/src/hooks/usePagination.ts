import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages safely
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(items.length / itemsPerPage));
  }, [items.length, itemsPerPage]);

  // Wrapper to safely change page
  const goToPage = (page: number) => {
    setCurrentPage(() => {
      const safePage = Math.max(1, Math.min(page, totalPages));
      return safePage;
    });
  };
  // Slice items for the current page
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [currentPage, items, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
  };
}
