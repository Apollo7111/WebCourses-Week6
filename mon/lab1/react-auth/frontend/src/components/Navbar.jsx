import { Link } from "react-router-dom";


function Navbar({ setIsAuthenticated, isAuthenticated }) {
  const handleClick = () => {
    // remove user from storage
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };
const user = JSON.parse(localStorage.getItem("user"));
// user.email
  return (
    <nav>
      {isAuthenticated && (
        <div>
          <Link to="/profile">{user.email}</Link>
          <Link to="/">Welcome</Link>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

