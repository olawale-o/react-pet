import React from 'react';
import './style.scss';

const SideSearchPanel = () => {
  console.log('SideSearchPanel');

  return (
    <div className="search__panel">
      <div className="container">
        <div className="panel__card">
          <h6 className="title">Gender</h6>
          <ul className="list">
            <li className="item">
              <input type="checkbox" id="female" className="checkbox" />
              <label htmlFor="female">Female</label>
            </li>
            <li className="item">
              <input type="checkbox" id="male" className="checkbox" />
              <label htmlFor="male">Male</label>
            </li>
          </ul>
        </div>
        <div className="panel__card">
          <h6 className="title">Category</h6>
          <ul className="list">
            <li className="item">
              <input type="checkbox" id="breeder" className="checkbox" />
              <label htmlFor="breeder">Breeder</label>
            </li>
            <li className="item">
              <input type="checkbox" id="non-breeder" className="checkbox" />
              <label htmlFor="non-breeder">Non Breeder</label>
            </li>
          </ul>
        </div>
        <div className="panel__card">
          <h6 className="title">Color</h6>
          <select name="color">
            <option value="any">Any</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideSearchPanel;
