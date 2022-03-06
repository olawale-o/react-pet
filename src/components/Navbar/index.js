import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/auth_selector';
import './style.scss';

const Navbar = () => {
  const { user } = useSelector(authSelector);
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">Paws</Link>
        </div>
        <ul className="nav__list">
          {!user && (
            <li className="nav__item">
              <Link to="/" type="button" className="btn__link btn-login">Login</Link>
            </li>
          )}
          {user && (
            <li className="nav__item">
              <Link to="/" type="button" className="btn__link btn-login">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
