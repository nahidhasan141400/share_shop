import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {currentPage > 3 && (
          <button
            onClick={() => goToPage(1)}
            className="px-3 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-200"
          >
            1
          </button>
        )}
        {currentPage > 4 && (
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
        )}
        {[...Array(5)].map((_, idx) => {
          const page = currentPage - 2 + idx;
          if (page >= 1 && page <= totalPages) {
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 text-sm rounded-md ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          }
          return null;
        })}
        {currentPage < totalPages - 3 && (
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
        )}
        {currentPage < totalPages - 2 && (
          <button
            onClick={() => goToPage(totalPages)}
            className="px-3 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-200"
          >
            {totalPages}
          </button>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
