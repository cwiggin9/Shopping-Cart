import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Card.module.css";

function Card({ productName, variationId, variationName, imagePath }) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`/products/${variationId}`);
  };

  console.log(imagePath);

  return (
    <div className={`${styles.Card}`} onClick={routeChange}>
      <img
        src={`../images/${imagePath}`}
        alt={`${productName} - ${variationName}`}
      />
      <div className={styles.overlay}></div>
    </div>
  );
}

Card.propTypes = {
  productName: PropTypes.string,
  variationId: PropTypes.string.isRequired,
  variationName: PropTypes.string,
  imagePath: PropTypes.string,
};

export default Card;
