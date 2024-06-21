import React from "react";
import { useGlobalContext } from "../Context";

const categories = ["Business", "Technology", "Entertainment", "Health", "Science", "Sports"];

const CategoryFilter = () => {
  const { searchPost } = useGlobalContext();

  const handleCategoryChange = (category) => {
    searchPost(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
