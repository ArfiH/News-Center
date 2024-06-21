import React from "react";
import { useGlobalContext } from "../Context";

const Stories = () => {
  const { hits, isLoading, removePost, addToFavorites } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="stories-div">
      {hits.map((curPost) => {
        const { title, author, url, image, description } = curPost;
        return (
          <div className="card" key={url}>
            {image && (
              <img className="card-img" src={image} alt={title} />
            )}
            <div className="card-content">
              <h2>{title}</h2>
              <p>
                By <span>{author || "Unknown"}</span> | {description}
              </p>
            </div>
            <div className="card-button">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
              <a href="#" onClick={() => addToFavorites(curPost)}>
                Add to favourites
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
