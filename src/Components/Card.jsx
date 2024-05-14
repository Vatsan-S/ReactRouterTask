import React from "react";
import "/card.css";

const Card = ({ ele, index }) => {
  return (
    <div key={ele.id} className="cardWrapper col-12 col-md-4 col-lg-3">
      <div className="card">
        <div className="imgContainer">
          <img src={ele.img} alt="" />
        </div>
        <div className="content">
          <div className="contentContainer">
            <h3 className="title">{ele.title}</h3>
            <p className="author">By {ele.author}</p>
          </div>
          <div className="creation">
            <p className="date">{ele.date}</p>
            <p className="readingTime">{ele.timePeriod}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
