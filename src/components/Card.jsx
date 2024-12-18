import React from "react";
import { Link } from "react-router-dom";

export default function Card({ dataElements }) {
  return (
    <div className="container-cards">
      {dataElements.map((item) => (
        <div key={item.id} className="cards">
          <div className="cards-items1">
            <img src={item.image} alt={item.name} className="cards-image" />
          </div>
          <div className="cards-items2">
            <Link to={`/cart/${item.id}`} className="cards-title">
              {item.name}
            </Link>
            <h3 className="cards-status">
              {item.status} - {item.species}
            </h3>
            <h2 className="cards-names">{item.origin.name}</h2>
            <h4 className="cards-location-name">{item.location.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
