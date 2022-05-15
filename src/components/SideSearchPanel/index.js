import React from 'react';
import './style.scss';
import { petColors, genders, breedTypes } from '../../constants';

const SideSearchPanel = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [pawColors, setPawColors] = React.useState(petColors);
  const [pawColor, setPawColor] = React.useState('');
  const searchInputRef = React.useRef();
  const [gender, setGender] = React.useState('both');
  const [breed, setBreed] = React.useState('both');

  const onGenderSelected = (e) => {
    setGender(e.target.value);
  };

  const onBreedSelected = (e) => {
    console.log(e.target.value);
    setBreed(e.target.value);
  };

  const onSearchInputActive = () => {
    setIsVisible(true);
  };

  const onSearch = (value) => {
    setPawColor(value);
    if (value.trim() === '') {
      setPawColors(petColors);
    } else {
      const filterColors = petColors.filter((color) => color.name.startsWith(value.toLowerCase()));
      if (filterColors.length > 0) {
        setPawColors(filterColors);
      } else {
        setPawColors([value]);
      }
    }
  };
  const colors = pawColors.map(({ id, name }) => (
    <li key={id}>
      <button
        type="button"
        onClick={() => {
          setPawColor(name);
          setIsVisible(false);
        }}
      >
        {name}
      </button>
    </li>
  ));

  React.useEffect(() => {
    const onOutSideClick = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener('click', onOutSideClick);
    return () => document.removeEventListener('click', onOutSideClick);
  }, []);

  return (
    <div className="search__panel">
      <div className="container">
        <div className="panel__card">
          <h6 className="title">Gender</h6>
          <ul className="list">
            {genders.map(({ name, value }) => (
              <li className="item" key={value}>
                <input
                  type="radio"
                  id={value}
                  className="checkbox"
                  name="gender"
                  value={value}
                  onChange={onGenderSelected}
                  checked={gender === value}
                />
                <label htmlFor={value}>{name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel__card">
          <h6 className="title">Category</h6>
          <ul className="list">
            {breedTypes.map(({ name, value }) => (
              <li className="item" key={value}>
                <input
                  type="radio"
                  id={value}
                  value={value}
                  name="breed"
                  className="checkbox"
                  onChange={onBreedSelected}
                  checked={breed === value}
                />
                <label htmlFor={value}>{name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel__card">
          <h6 className="title">Color</h6>
          <div ref={searchInputRef} className={`search__input ${isVisible ? 'active' : ''}`}>
            <input
              type="text"
              name="color"
              placeholder="Color"
              onFocus={onSearchInputActive}
              onChange={(e) => onSearch(e.target.value)}
              value={pawColor}
              autoComplete="off"
            />
            <ul className="match__box">{colors}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearchPanel;
