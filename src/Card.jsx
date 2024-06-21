import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({ id, name }) {

  let navigate = useNavigate(); 
  const routeChange = () => {
    navigate(`/products/${id}`);
  }

  return (
    <div className='Card' onClick={routeChange}>
      <img src="" alt={name} />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
