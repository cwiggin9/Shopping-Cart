import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({ productName, variationId, variationName }) {

  let navigate = useNavigate(); 
  const routeChange = () => {
    navigate(`/products/${variationId}`)
  }

  return (
    <div className='Card' onClick={routeChange}>
      <img src="" alt={`${productName} - ${variationName}`} />
    </div>
  );
}

Card.propTypes = {
  productName: PropTypes.string.isRequired,
  variationId: PropTypes.string.isRequired,
  variationName: PropTypes.string.isRequired,
};

export default Card;
