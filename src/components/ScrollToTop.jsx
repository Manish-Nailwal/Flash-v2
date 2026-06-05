import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top whenever the route (pathname) changes.
// Skips when there's a hash so in-page anchors (e.g. /#features) still work.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
