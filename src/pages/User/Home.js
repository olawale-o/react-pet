import './Home.scss';
import SideBar from '../../components/SideBar';

const Home = () => {
  console.log('Home');

  return (
    <div className="home">
      <SideBar />
      <div className="home-content">
        Dashboard
      </div>
    </div>
  );
};

export default Home;
