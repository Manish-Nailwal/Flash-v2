import {
  Terminal,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const MANISH_LABS = "https://manishlabs.com";

const socials = [
  { Icon: Twitter, href: "https://x.com/ManishNailwal_", label: "X" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/manish-nailwal/",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/manishnailwal_/",
    label: "Instagram",
  },
  {
    Icon: Github,
    href: "https://github.com/Manish-Nailwal/Flash-Challenge",
    label: "GitHub",
  },
];

function ColTitle({ children }) {
  return (
    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      {children}
    </h3>
  );
}

function FootLink({ to, href, children }) {
  const cls =
    "text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="container mx-auto">
        <div className="glass rounded-3xl px-6 sm:px-10 py-12">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link to="/" className="inline-flex items-center gap-2.5">
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
              <p className="mt-5 text-sm text-muted max-w-xs leading-relaxed">
                A fast, minimal color-sequence memory game. No account, no
                server; your best run lives in your browser.
              </p>
              <a
                href={MANISH_LABS}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6 px-5 py-2.5 text-sm"
              >
                Explore Manish Labs
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Play */}
            <div className="md:col-span-3">
              <ColTitle>Play</ColTitle>
              <ul className="mt-4 space-y-3">
                <li>
                  <FootLink to="/play">All modes</FootLink>
                </li>
                <li>
                  <FootLink to="/play/normal">Normal mode</FootLink>
                </li>
                <li>
                  <FootLink to="/play/blitz">Blitz mode</FootLink>
                </li>
              </ul>
            </div>

            {/* Explore + socials */}
            <div className="md:col-span-4">
              <ColTitle>Explore</ColTitle>
              <ul className="mt-4 space-y-3">
                <li>
                  <FootLink to="/#features">Features</FootLink>
                </li>
                <li>
                  <FootLink href={MANISH_LABS}>
                    Manish Labs
                    <ExternalLink className="h-3.5 w-3.5" />
                  </FootLink>
                </li>
              </ul>
              <div className="mt-7 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid place-items-center h-10 w-10 rounded-xl border border-card-border text-muted hover:text-accent hover:border-accent transition-colors"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-muted">
              © 2026 Manish Labs. Built for the love of the game.
            </p>
            <p className="text-xs text-muted">
              An experiment from{" "}
              <a
                href={MANISH_LABS}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Manish Labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
