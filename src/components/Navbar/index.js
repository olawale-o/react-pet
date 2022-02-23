import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => (
  <header className="header">
    <nav className="nav">
      <div className="logo">
        <Link to="/">Paws</Link>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" type="button" className="btn__link btn-login">Login</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
