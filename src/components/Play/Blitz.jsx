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
    btnPressFn(
      e,
      start,
      gameStatus,
      userQueue,
      setUserQueue,
      colors,
      setRandIdx
    );
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
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around mt-0">
      {/* Color Box */}
      <Color btnPress={btnPress} randIdx={randIdx} />

      <div className="relative box-2 glass rounded-2xl px-8 py-10 mt-8 text-center">
        <div className="flex flex-col justify-center">
          {!start ? (
            <>
              <button
                onClick={returnFn}
                className="absolute right-4 -top-4 text-foreground hover:text-accent"
              >
                <Undo2 size={20} />
              </button>
              <h1 className="text-2xl font-semibold mb-2">Play Blitz Mode</h1>
              <p className="text-muted">Score before 30s</p>
              <button
                onClick={startGame}
                className="bg-accent hover:bg-accent-hover text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-40 mx-auto"
              >
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
      </div>
    </section>
  );
}

export default Blitz;
