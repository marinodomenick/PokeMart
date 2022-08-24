//floors
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function VNavBar() {
  const { user } = useAuth()
  return (
    <nav className="vNavi">
      <div className="myAccLink">
      { user.id ? <Link to="/myaccount">My Account</Link> : <Link to="/login">My Account</Link> }
      </div>
      <br/>
      <div className="floors">
      <Link id="Link" to="/items/floor/1">
        Floor 1
      </Link>
      <Link id="Link" to="/items/floor/2">
        Floor 2
      </Link>
      <Link id="Link" to="/items/floor/3">
        Floor 3
      </Link>
      <Link id="Link" to="/items/floor/4">
        Floor 4
      </Link>
      <Link id="Link" to="/items/floor/5">
        Floor 5
      </Link>
      <Link id="Link" to="/items/floor/6">
        Floor 6
      </Link>
      <Link id="Link" to="/items">
        All Items
      </Link>
      <Link id="Link" to="/cart">
        Cart
      </Link>
      </div>
    </nav>
  );
}

export default VNavBar;
