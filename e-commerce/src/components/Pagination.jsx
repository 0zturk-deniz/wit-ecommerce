import { useState } from "react";

const Pagination = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex border rounded overflow-hidden text-sm shadow-sm">
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          First
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 font-medium ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 text-blue-500"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
