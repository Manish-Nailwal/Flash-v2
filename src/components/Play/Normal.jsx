import { Undo2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import "../../pages/Play.css";
import {
  btnPressFn,
  checkBtnFn,
  isHighScoreFn,
  lvlUpFn,
  startGameFn,
} from "../../util/gameUtil";
import Color from "./Color";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NormalComp from "./NormalComp";
function Normal() {
  const colors = ["red", "yellow", "green", "blue"];
  const [start, setStart] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [currQueue, setCurrQueue] = useState([]);
  const [userQueue, setUserQueue] = useState([]);
  const [currLvl, setCurrLvl] = useState(0);
  const [randIdx, setRandIdx] = useState(-1);
  const [gameStatus, setGameStatus] = useState(false);
  const [restart, setRestart] = useState(false);
  const { highScore, setHighScore, setGameMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const startGame = () => {
    startGameFn(
      setHighScore,
      setCurrLvl,
      setStart,
      setCurrScore,
      setGameStatus,
      lvlUp
    );
  };
  const lvlUp = () => {
    lvlUpFn(
      currLvl,
      setCurrLvl,
      setCurrScore,
      isHighScore,
      currQueue,
      setCurrQueue,
      setRandIdx,
      colors,
      setUserQueue
    );
  };

  const reStartGame = () => {
    setCurrLvl(0);
    setGameStatus(true);
    setRestart(true);
  };

  const checkBtn = (idx) => {
    checkBtnFn(
      idx,
      currQueue,
      userQueue,
      lvlUp,
      setCurrQueue,
      setGameStatus,
      highScore,
      currLvl
    );
  };

  const btnPress = (e) => {
    btnPressFn(e, start, gameStatus, userQueue, setUserQueue, colors, setRandIdx);
  };

  const isHighScore = () => {
    isHighScoreFn(highScore, currLvl, setHighScore);
  };

  useEffect(() => {
    if (restart) {
      setUserQueue([]);
      setCurrQueue([]);
      setRestart(false);
      startGame();
    }
  }, [restart]);

  useEffect(() => {
    if (start) {
      checkBtn(userQueue.length - 1);
    }
  }, [userQueue]);

  const returnFn = () => {
    setGameMode("mode");
    navigate("/play");
  };

  return (
    <section className="container mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <Color btnPress={btnPress} randIdx={randIdx} />

      <div className="relative glass rounded-2xl px-8 py-10 text-center min-w-[18rem]">
        {!start ? (
          <>
            <button
              onClick={returnFn}
              aria-label="Back to mode select"
              className="absolute right-4 top-4 text-muted hover:text-accent transition-colors"
            >
              <Undo2 size={20} />
            </button>
            <span className="eyebrow">Normal mode</span>
            <h1 className="mt-3 text-2xl font-bold">Repeat the sequence</h1>
            <p className="mt-2 text-sm text-muted">
              It grows by one tile every round.
            </p>
            <button onClick={startGame} className="btn-primary mt-8 w-full">
              Play
            </button>
          </>
        ) : (
          <NormalComp
            gameStatus={gameStatus}
            currScore={currScore}
            currLvl={currLvl}
            highScore={highScore}
            reStartGame={reStartGame}
          />
        )}
      </div>
    </section>
  );
}

export default Normal;
