import { Terminal } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/15 border border-accent/30 text-accent">
          <Terminal className="h-5 w-5" />
        </span>
        <NavLink to={"/"}>
          <span className="text-2xl font-bold">Manish</span>
          <span className="text-2xl font-bold text-muted">Labs</span>
        </NavLink>
      </div>
      <div className="hidden md:flex space-x-8">
        <NavLink to={"/"} className="hover:text-accent transition-colors">
          Home
        </NavLink>
        <NavLink to={"/features"} className="hover:text-accent transition-colors">
          Features
        </NavLink>
        <NavLink to={"/play"} className="hover:text-accent transition-colors">
          Play
        </NavLink>
      </div>
      <button className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-full font-medium transition-colors">
        <Link to={"/play"}>Play Now</Link>
      </button>
    </nav>
  );
}

export default Navbar;
