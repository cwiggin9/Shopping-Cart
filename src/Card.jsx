import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card(props) {

  let navigate = useNavigate(); 
  const routeChange = () => {
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className='Card' onClick={routeChange}>
      <img src="" alt={props.name} />
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string
};
