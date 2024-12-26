// hooks/Pagination.ts
import { useState } from "react";
interface UsePaginationProps {
  totalPages: number;
  initialPage?: number;
  limit: number;
}
const usePagination = ({
  totalPages,
  initialPage = 1,
  limit,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const skip = (currentPage - 1) * limit;
  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return {
    currentPage,
    skip,
    onPageChange,
  };
};

export default usePagination;
