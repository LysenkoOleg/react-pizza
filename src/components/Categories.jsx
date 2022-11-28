import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((element, index) => {
          return (
            <li
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
              key={index}
            >
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
