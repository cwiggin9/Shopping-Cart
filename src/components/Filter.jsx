import React from "react";
import styles from "../styles/Filter.module.css";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();

  const handleFilterChange = (category) => {
    const path =
      category === "All" ? "/" : `/collections/${category.toLowerCase()}`;
    navigate(path);
  };

  return (
    <div className={`${styles.filter} filter`}>
      <ul>
        <li onClick={() => handleFilterChange("All")}>All</li>
        <li onClick={() => handleFilterChange("T-Shirts")}>T-Shirts</li>
        <li onClick={() => handleFilterChange("Sweatshirts")}>Sweatshirts</li>
        <li onClick={() => handleFilterChange("Hats")}>Hats</li>
      </ul>
    </div>
  );
}

export default Filter;
