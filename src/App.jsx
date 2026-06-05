import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Play from "./pages/Play";
import NotFound from "./NotFound";
import Blitz from "./components/Play/Blitz";
import Normal from "./components/Play/Normal";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen flex flex-col text-foreground">
      <div className="app-grid" aria-hidden="true" />
      <div className="app-glow" aria-hidden="true" />
      <Navbar />
      <ToastContainer
        position="bottom-center"
        theme={theme}
        autoClose={2500}
        hideProgressBar
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play/blitz" element={<Blitz />} />
          <Route path="/play/normal" element={<Normal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
