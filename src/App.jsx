import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Play from "./pages/Play";
import NotFound from "./NotFound";
import Features from "./pages/Features";
import Blitz from "./components/Play/Blitz";
import Normal from "./components/Play/Normal";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ToastContainer theme="dark" />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play/blitz" element={<Blitz />} />
          <Route path="/play/normal" element={<Normal />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
