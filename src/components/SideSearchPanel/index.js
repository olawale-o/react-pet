import React from 'react';
import './style.scss';
import petColors from '../../constants/pet_colors';

const SideSearchPanel = () => {
  const [pawColors, setPawColors] = React.useState(petColors);
  const [pawColor, setPawColor] = React.useState('');
  const searchInputRef = React.useRef();

  const colors = pawColors.map((color) => (
    <li key={color}><button type="submit" onClick={() => console.log(color)}>{color}</button></li>
  ));

  const onSearchInputActive = () => {
    searchInputRef.current.classList.add('active');
  };

  const onSearch = (value) => {
    setPawColor(value);
    if (value.trim() === '') {
      setPawColors(petColors);
    } else {
      const filterColors = petColors.filter((color) => color.startsWith(value.toLowerCase()));
      if (filterColors.length > 0) {
        setPawColors(filterColors);
      } else {
        setPawColors([value]);
      }
    }
  };

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
          <div ref={searchInputRef} className="search__input">
            <input
              type="text"
              name="color"
              placeholder="Color"
              onFocus={onSearchInputActive}
              onChange={(e) => onSearch(e.target.value)}
              onBlur={() => searchInputRef.current.classList.remove('active')}
              value={pawColor}
            />
            <ul className="match__box">
              {colors}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearchPanel;
