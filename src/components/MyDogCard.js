import PropTypes from 'prop-types';

const MyDogCard = ({ dog }) => (
  <li className="dog__item">
    <div className="single__dog">
      <div className="dog__image">
        <img src={dog.image} alt="firstDog" />
      </div>
      <div className="left">
        <div className="dog__info">
          <h4>{dog.name}</h4>
          <h5>Breed</h5>
          <p>{dog.bio}</p>
        </div>
        <div className="footer">
          <button type="button">
            <span><i className="bx bx-message-rounded" /></span>
            <span>{dog.comments}</span>
          </button>
          <button type="button">
            <span><i className="bx bx-heart" /></span>
            <span>{dog.likes}</span>
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default MyDogCard;

MyDogCard.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
