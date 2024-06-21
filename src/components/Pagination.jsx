import React from "react";
import { useGlobalContext } from "../Context";

const Pagination = () => {
  const { page, totalPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="pagination-btn">
      <button onClick={getPrevPage} disabled={page === 1}>
        PREV
      </button>
      <p>
        {page} of {totalPages}
      </p>
      <button onClick={getNextPage} disabled={page === totalPages}>
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
