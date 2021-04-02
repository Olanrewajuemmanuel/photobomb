import React from "react";

function Body({ categories }) {
  return (
    <div className="photobomb-body">
      <div className="photobomb__categ">
        <div className="carousel-slide">
          <ul className="category">
            {categories.map((category) => (
              <li key={category.name} className="category-list">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="photobomb__header">
        <h1>Searching and Celebrating African Arts</h1>
      </div>
    </div>
  );
}

export default Body;
