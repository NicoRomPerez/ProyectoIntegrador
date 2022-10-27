import React from "react";
import ListCard from "./ListCard/ListCard";
import './ListBlock.scss'

const CategoriesBlock = () => {
  return (
    <div className="list-block">
      <div className="list-title">
        <h1>Recomendaciones</h1>
      </div>
      <div>
        <ul className="list-container">
          <ListCard></ListCard>
        </ul>
      </div>
    </div>  
  );
};

export default CategoriesBlock;
