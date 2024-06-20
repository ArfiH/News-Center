import React from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  console.log("Query:", query);
  console.log("Search Post Function:", searchPost);

  return (
    <>
      <header>
        <h1 className="heading">News Center</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </header>
    </>
  );
};

export default Search;
