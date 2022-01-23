import React from 'react';

const SideBar = () => {
  const [slide, setSlide] = React.useState(false);
  const onSlide = () => {
    setSlide((prev) => !prev);
  };
  return (
    <>
      <button type="button" className="menu" onClick={onSlide}>
        <i className="bx bx-menu icon" />
      </button>
      <aside className={`aside ${slide ? 'slide' : ''}`}>
        <div className="top">
          <button type="button" className="close" onClick={onSlide}>
            <i className="bx bx-menu icon" />
          </button>
          <a href="/#" className="logo">PetCon</a>
        </div>
        <div className="bottom">
          <a href="/#" className="link">
            <span className="link__content">
              <i className="bx bxs-user" />
              <h3>Profile</h3>
            </span>
          </a>
          <a href="/#" className="link">
            <span className="link__content">
              <i className="bx bx-cog" />
              <h3>Settings</h3>
            </span>
          </a>
          <a href="/#" className="link">
            <span className="link__content">
              <i className="bx bx-plus" />
              <h3>Add Dog</h3>
            </span>
          </a>
        </div>
        <div className="footer">
          <a href="/#" className="link">
            <span className="link__content">
              <i className="bx bx-log-out-circle" />
              <h3>Logout</h3>
            </span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
