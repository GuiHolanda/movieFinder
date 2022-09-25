import { Link } from 'react-router-dom';
import UserMenu from '../components/UserMenu';

function Navbar() {
  return (
    <nav className={`header navbar bg-dark`}>
      <ul className=" mx-3 container-fluid justify-content-center justify-content-md-between ">
        <li>
          <Link to="/">
            {' '}
            <a
              href="#"
              className="d-flex navbar-brand align-items-center text-light"
            >
              <i className="bi bi-film title me-4"></i>
              <h3 className="m-0 title fst-italic">Movie Finder</h3>
            </a>
          </Link>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
