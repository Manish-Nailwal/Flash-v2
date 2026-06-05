import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass rounded-3xl px-8 py-14 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <span className="grid place-items-center h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
            <AlertTriangle size={32} />
          </span>
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight mb-3">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist, but the game still does.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
