import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-4 z-50 bg-transparent">
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-4 w-[96%] mx-auto my-4">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-lg font-medium text-white">RelationalSQL Lab</h2>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-10 text-sm font-light text-gray-200">
          <p
            className="hover:text-cyan-400 transition cursor-pointer"
            to="/databases"
          >
            Databases
          </p>
          <Link to="/sql">
            <p
              className="hover:text-cyan-400 transition cursor-pointer"
              to="/sql"
            >
              SQL Lab
            </p>
          </Link>
          <p
            className="hover:text-cyan-400 transition cursor-pointer"
            to="/mongodb"
          >
            Mongo View
          </p>
          <p
            href="https://github.com/your-repo"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
