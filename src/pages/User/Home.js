import React from 'react';
import Listings from '../Listings';
import './Home.scss';

const Home = () => {
  console.log('Home');
  return (
    <div className="home">
      <div className="content">
        <div className="main">
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default Home;
