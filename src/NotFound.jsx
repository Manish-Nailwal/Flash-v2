import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-accent" />
        </div>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-muted mb-8">
          The page you are attempting to access is currently unavailable or
          undergoing maintenance.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
