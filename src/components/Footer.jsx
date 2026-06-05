import { Terminal, Github, Twitter, Instagram, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="border-t border-card-border py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-4 md:mb-0 max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/15 border border-accent/30 text-accent">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="text-xl font-bold">
                Manish<span className="text-muted">Labs</span>
              </span>
            </div>
            <p className="text-muted">
              Flash is a Manish Labs experiment — a fast-paced color-sequence
              memory game. Repeat the pattern and see how far you can go.
            </p>
            <a
              href="https://manishlabs.com"
              className="inline-block mt-4 text-accent hover:underline"
            >
              ← Back to Manish Labs
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="flex space-x-6 mb-6">
              <a
                href="https://x.com/ManishNailwal_"
                className="text-muted hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/manish-nailwal/"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/manishnailwal_/"
                className="text-muted hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Manish-Nailwal/Flash-Challenge"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted text-sm">
              © 2026 Manish Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
