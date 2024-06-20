import React from "react";
import { useGlobalContext } from "../Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage() } disabled={page == 0}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage() } disabled={page + 1 == nbPages}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;