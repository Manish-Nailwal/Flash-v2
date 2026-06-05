import { toast } from "react-toastify";

const HIGH_SCORE_KEY = "flash-highscore";

export const lvlUpFn = (
  currLvl,
  setCurrLvl,
  setCurrScore,
  isHighScore,
  currQueue,
  setCurrQueue,
  setRandIdx,
  colors,
  setUserQueue
) => {
  setUserQueue([]);
  setCurrLvl(currLvl + 1);
  setCurrScore(currLvl);
  isHighScore();
  let idx = Math.floor(Math.random() * 4);
  setRandIdx(idx);
  setCurrQueue([...currQueue, colors[idx]]);
  setTimeout(() => setRandIdx(-1), 150);
};

export const startGameFn = (
  setHighScore,
  setCurrLvl,
  setStart,
  setCurrScore,
  setGameStatus,
  lvlUp
) => {
  const stored = Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
  setHighScore(stored);
  setCurrLvl(0);
  setStart(true);
  setCurrScore(0);
  setGameStatus(true);
  setTimeout(lvlUp, 500);
};

export const checkBtnFn = (
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
) => {
  if (currQueue[idx] === userQueue[idx]) {
    if (currQueue.length === userQueue.length) {
      setTimeout(() => lvlUp(), 500);
    }
  } else {
    setCurrQueue([]);
    isRunning ? setIsRunning(false) : null;
    setGameStatus(false);
    if (highScore < currLvl && currLvl !== 1) {
      toast.info("New high score!");
    } else {
      toast.error("Game Over!!");
    }
  }
};

export const btnPressFn = (
  e,
  start,
  gameStatus,
  userQueue,
  setUserQueue,
  colors,
  setRandIdx
) => {
  if (start && gameStatus) {
    setUserQueue([...userQueue, colors[e.target.id]]);
    setRandIdx(e.target.id);
    setTimeout(() => setRandIdx(-1), 150);
  }
};

export const isHighScoreFn = (highScore, currLvl, setHighScore) => {
  if (highScore < currLvl) {
    setHighScore(currLvl);
    localStorage.setItem(HIGH_SCORE_KEY, currLvl);
    return true;
  }
  return false;
};
