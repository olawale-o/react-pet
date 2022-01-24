import profile from '../assets/images/profile.png';
import firstDog from '../assets/images/dog1.jpg';
import secondDog from '../assets/images/dog2.jpg';
import MyDogCard from './MyDogCard';

const Profile = () => {
  console.log('Profile');

  return (
    <div className="profile">
      <div className="header">
        <div className="profile__header-image">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile__header-content">
          <h3>John Doe</h3>
          <h5>Omoogun Olawale</h5>
          <div className="pet__count">
            <span>4</span>
            <span>Dogs</span>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <div className="dog__section">
          <ul className="dog__list">
            <MyDogCard dog={{
              name: 'Billy',
              image: firstDog,
              bio: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
              likes: '12',
              comments: '3',
            }}
            />
            <MyDogCard dog={{
              name: 'Night',
              image: secondDog,
              bio: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
              likes: '10',
              comments: '15',
            }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
