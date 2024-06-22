import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Filter.module.css";

function Filter({ onFilterChange }) {
  return (
    <div className={styles.filter}>
      <ul>
        <li onClick={() => onFilterChange("All")}>All</li>
        <li onClick={() => onFilterChange("T-Shirts")}>T-Shirts</li>
        <li onClick={() => onFilterChange("Sweatshirts")}>Sweatshirts</li>
        <li onClick={() => onFilterChange("Hats")}>Hats</li>
      </ul>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
