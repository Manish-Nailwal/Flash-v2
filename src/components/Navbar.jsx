import { Terminal } from "lucide-react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goFeatures = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/#features");
    } else {
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? "text-accent" : "text-muted hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-x-0 border-t-0">
        <nav className="container mx-auto h-16 flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent/15 border border-accent/30 text-accent">
              <Terminal className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">Flash</span>
              <span className="mt-1 text-[11px] font-normal text-muted">
                by Manish Labs
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to={"/"} end className={linkClass}>
              Home
            </NavLink>
            <a
              href="/#features"
              onClick={goFeatures}
              className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <NavLink to={"/play"} className={linkClass}>
              Play
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to={"/play"} className="btn-primary px-5 py-2 rounded-full">
              Play Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
