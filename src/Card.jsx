import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className='Card'>
      <img src="" alt={props.name} />
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string
};
