import { useContext } from "react";
import { Link } from "react-router-dom";
import navUser from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center pt-5">
      <div>{user?.email}</div>
      <div className="space-x-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3">
        <img className="rounded-full" src={navUser} alt="" />
        <div>
          {user && user?.email ? (
            <button
              onClick={logout}
              className="flex  items-center py-1 px-4 rounded-md bg-[#403F3F] text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="flex  items-center py-1 px-4 rounded-md bg-[#403F3F] text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
