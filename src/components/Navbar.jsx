import { useState } from "react";
import { Terminal, Menu, X, ExternalLink } from "lucide-react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MANISH_LABS = "https://manishlabs.com";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  const goFeatures = (e) => {
    e.preventDefault();
    close();
    if (pathname !== "/") {
      navigate("/#features");
    } else {
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navCls = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? "text-accent" : "text-muted hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2">
      <nav className="container mx-auto glass rounded-2xl h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" onClick={close} className="flex items-center gap-2.5">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-accent/15 border border-accent/30 text-accent">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight">Flash</span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              by Manish Labs
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" end className={navCls}>
            Home
          </NavLink>
          <a
            href="/#features"
            onClick={goFeatures}
            className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            Features
          </a>
          <NavLink to="/play" className={navCls}>
            Play
          </NavLink>
          <a
            href={MANISH_LABS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
          >
            Manish Labs
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            to="/play"
            className="hidden sm:inline-flex btn-primary px-5 py-2 rounded-full"
          >
            Play Now
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-card-border text-muted hover:text-accent hover:border-accent transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container mx-auto mt-2">
          <div className="glass rounded-2xl py-3 flex flex-col">
            <NavLink
              to="/"
              end
              onClick={close}
              className="px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent/10"
            >
              Home
            </NavLink>
            <a
              href="/#features"
              onClick={goFeatures}
              className="px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent/10 cursor-pointer"
            >
              Features
            </a>
            <NavLink
              to="/play"
              onClick={close}
              className="px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent/10"
            >
              Play
            </NavLink>
            <a
              href={MANISH_LABS}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent/10 inline-flex items-center gap-1.5"
            >
              Manish Labs
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link to="/play" onClick={close} className="btn-primary mt-2 mx-1">
              Play Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
