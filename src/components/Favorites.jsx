import React from "react";
import { useGlobalContext } from "../Context";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();

  if (favorites.length === 0) {
    return <h2>No favorites added</h2>;
  }

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.map((curPost) => {
        const { title, author, url, urlToImage, description } = curPost;
        return (
          <div className="card" key={url}>
            {urlToImage && (
              <img className="card-img" src={urlToImage} alt={title} />
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
              <a href="#" onClick={() => removeFromFavorites(url)}>
                Remove from favourites
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
