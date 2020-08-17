import React from "react";
import Thumbnail from "../Thumbnail";

function SearchResult({ title, authors, description, thumbnail, infoLink }) {
  return (
    <div>
      <h3>{title}</h3>
      <h6>Written by {authors}</h6>
      <img
        src={thumbnail}
        alt={title}
        className="img-thumbnail rounded float-left"
      />

      <p>
        {description} <br />
      <a href={infoLink}>{infoLink}</a>
      </p>
    </div>
  );
}

export default SearchResult;
