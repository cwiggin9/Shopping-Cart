import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Card.module.css";

function Card({ productCategory, variationId, variationName, imagePath }) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`/products/${variationId}`);
  };

  return (
    <div className={`${styles.Card}`} onClick={routeChange}>
      <img
        src={`images/${imagePath}`}
        alt={`${productCategory} - ${variationName}`}
      />
      <div className={styles.overlay}></div> {/* Add overlay */}
    </div>
  );
}

Card.propTypes = {
  productCategory: PropTypes.string,
  variationId: PropTypes.string.isRequired,
  variationName: PropTypes.string,
  imagePath: PropTypes.string,
};

export default Card;
