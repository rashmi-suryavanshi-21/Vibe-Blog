import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-amber-400 tracking-wide"
          >
            VibeBlogs
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <ul className="flex items-center gap-8 text-[1rem] font-medium">

            <li>
              <Link
                to="/add"
                className="text-zinc-200 hover:text-amber-400 transition duration-300"
              >
                WriteBlog
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-zinc-200 hover:text-amber-400 transition duration-300"
              >
                About
              </Link>
            </li>

            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-amber-400 hover:bg-amber-500 text-black px-5 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-zinc-200 hover:text-amber-400 transition duration-300"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="bg-amber-400 hover:bg-amber-500 text-black px-5 py-2 rounded-lg font-semibold transition duration-300"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;