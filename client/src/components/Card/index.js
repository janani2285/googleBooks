import React from "react";
import Thumbnail from "../Thumbnail";

function Card({ title, authors, description, thumbnail, infoLink  }) {
  return (
    <div className="card" >
   <img src={thumbnail} alt={title} />
    <div className="card-body">
      <p className="card-text">
        Title : {title} <br />
        Authors : {authors} <br />
        Description : {description} <br />
        Book Info : <a href ={infoLink}>{infoLink}</a>
      </p>
    </div>
  </div>
  );
}

export default Card;
