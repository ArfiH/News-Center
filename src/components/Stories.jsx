import React from "react";
import { useGlobalContext } from "../Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  
  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, url, urlToImage, description } = curPost;
          return (
            <div className="card" key={url}>
              {urlToImage && <img className="card-img" src={urlToImage} alt={title} />}
              <h2>{title}</h2>
              <p>
                By <span> {author || "Unknown"} </span> | {description}
              </p>
              <div className="card-button">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(url)}>
                  Not interested
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
