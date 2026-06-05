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
import BlitzComp from "./BlitzComp";
import { toast } from "react-toastify";
function Blitz() {
  const colors = ["red", "yellow", "green", "blue"];
  const [start, setStart] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [currQueue, setCurrQueue] = useState([]);
  const [userQueue, setUserQueue] = useState([]);
  const [currLvl, setCurrLvl] = useState(0);
  const [randIdx, setRandIdx] = useState(-1);
  const [gameStatus, setGameStatus] = useState(false);
  const [restart, setRestart] = useState(false);
  const [time, setTime] = useState(30); // 30Second
  const [isRunning, setIsRunning] = useState(false);
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
    setIsRunning(!isRunning);
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
    setIsRunning(false);
    setTime(30);
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
      currLvl,
      setIsRunning,
      isRunning
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

  // Timer
  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time == 0 && isRunning) {
      setCurrQueue([]);
      setGameStatus(false);
      setIsRunning(false);
      if (highScore < currLvl) {
        toast.info("New high score!");
      } else {
        toast.error("Time Over!");
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds.toString().padStart(2, "0")}`;
  };

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
            <span className="eyebrow">Blitz mode</span>
            <h1 className="mt-3 text-2xl font-bold">Beat the clock</h1>
            <p className="mt-2 text-sm text-muted">
              Score as much as you can in 30 seconds.
            </p>
            <button onClick={startGame} className="btn-primary mt-8 w-full">
              Play
            </button>
          </>
        ) : (
          <BlitzComp
            gameStatus={gameStatus}
            currScore={currScore}
            highScore={highScore}
            reStartGame={reStartGame}
            time={formatTime(time)}
            isRunning={isRunning}
          />
        )}
      </div>
    </section>
  );
}

export default Blitz;
