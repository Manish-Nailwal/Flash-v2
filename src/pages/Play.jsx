import { useContext, useEffect, useState } from "react";
import "./Play.css";
import { AuthContext } from "../context/AuthContext";
import Color from "../components/Play/Color";
import Default from "../components/Play/Default";
import Modes from "../components/Play/Modes";

function Play() {
  const [content, setContent] = useState(<></>);
  const { gameMode, setGameMode } = useContext(AuthContext);

  // The board on this screen is decorative; the actual game runs
  // on the /play/normal and /play/blitz routes.
  const noop = () => {};

  useEffect(() => {
    if (gameMode === "default") {
      setContent(<Default setGameMode={setGameMode} />);
    }
    if (gameMode === "mode") {
      setContent(<Modes setGameMode={setGameMode} />);
    }
  }, [gameMode, setGameMode]);

  return (
    <section className="container mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <Color btnPress={noop} randIdx={-1} />
      <div className="glass rounded-2xl px-8 py-10 text-center min-w-[18rem]">
        <div className="flex flex-col justify-center">{content}</div>
      </div>
    </section>
  );
}

export default Play;
