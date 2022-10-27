import React from "react";
import { useState, useEffect } from "react";
import departments from "../../../../json/departments.json";
import "./ListCard.scss";

const ListCard = () => {

  

  return (
    <>
      {departments.map((department) => (
        <li key={department.id}>
          <div className="list-card">
            <div className="list-card-image">
              <img src={department.image} alt={department.category.title}></img>
            </div>
            <div className="list-card-info">
              <div className="list-card-title">
                <div className="list-card-title__text">
                  <h4>{department.category.title.toUpperCase()}</h4>
                  <h1>{department.title}</h1>
                </div>
                <div className="list-card-title__rating">
                  {/* <h2>8</h2> */}
                  {/* <h4>Muy bueno</h4> */}
                </div>
              </div>
              <p>{department.location}</p>
              <p>{department.description}</p>
              <button className="button-two">Ver detalle</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ListCard;
