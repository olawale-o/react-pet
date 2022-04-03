import React from 'react';
import './style.scss';
import petColors from '../../constants/pet_colors';

const SideSearchPanel = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [pawColors, setPawColors] = React.useState(petColors);
  const [pawColor, setPawColor] = React.useState('');
  const searchInputRef = React.useRef();

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
