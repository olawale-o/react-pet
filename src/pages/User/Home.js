import './Home.scss';
import SideBar from '../../components/SideBar';
import Profile from '../../components/Profile';

const Home = () => {
  console.log('Home');

  return (
    <div className="home">
      <SideBar />
      <div className="home-content">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
