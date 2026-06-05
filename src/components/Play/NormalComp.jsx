import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NormalComp({ gameStatus, currLvl, currScore, highScore, reStartGame }) {
  const { setGameMode } = useContext(AuthContext);
  const navigate = useNavigate();
  const returnFn = () => {
    setGameMode("mode");
    navigate("/play");
  };
  return (
    <>
      {gameStatus ? (
        <>
          <span className="eyebrow">Level</span>
          <p className="mt-1 font-mono text-5xl font-bold">{currLvl}</p>
        </>
      ) : (
        <>
          <span className="eyebrow">Game over</span>
          <p className="mt-1 text-lg text-muted">
            You reached level{" "}
            <span className="text-foreground font-semibold">{currScore}</span>
          </p>
        </>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 text-left">
        <div className="glass rounded-xl px-4 py-3">
          <p className="text-xs text-muted">Current</p>
          <p className="font-mono text-2xl font-bold">{currScore}</p>
        </div>
        <div className="glass rounded-xl px-4 py-3">
          <p className="text-xs text-muted">Best</p>
          <p className="font-mono text-2xl font-bold text-accent">{highScore}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={reStartGame} className="btn-primary flex-1">
          {gameStatus ? "Restart" : "Play Again"}
        </button>
        <button onClick={returnFn} className="btn-secondary">
          Modes
        </button>
      </div>
    </>
  );
}

export default NormalComp;
