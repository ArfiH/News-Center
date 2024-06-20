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
              {urlToImage ? <img className="card-img" src={urlToImage} alt={title} /> : "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png"}
              <h2>{title}</h2>
              <p>
                By <span> {author || "Unknown"} </span> | {description}
              </p>
              <div className="card-button">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(url)}>
                  Remove
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
