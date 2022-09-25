import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function UserMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        <i className="bi bi-person-circle title me-2"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link className="text-dark" to="/Favorites">
            <p className="pe-0">favorites</p>
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserMenu;
