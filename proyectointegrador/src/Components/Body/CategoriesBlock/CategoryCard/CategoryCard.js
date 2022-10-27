import React from "react";
import categories from "../../../../json/categories.json";
import "./CategoryCard.scss";

const CategoryCard = () => {
  return (
    <>
      {categories.map((category) => (
        <li key={category.id}>
          <div className="category-card">
            <div className="category-card-image">
              <img src={category.urlimage} alt={category.title}></img>
            </div>
            <div className="category-card-caption">
              <h2>{category.title}</h2>
              <h4>{category.description}</h4>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default CategoryCard;
