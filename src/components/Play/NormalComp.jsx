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
      <div className="flex flex-col">
        {gameStatus ? (
          <h2 className="text-2xl font-semibold text-center">
            Level {currLvl}
          </h2>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center">Game Over!</h2>
            <h2 className="text-lg font-semibold text-center text-muted">
              Previous Score: {currScore}
            </h2>
          </>
        )}
      </div>
      <span className="flex flex-row justify-between mt-5 text-lg">
        <p className="text-left text-muted">Current Score</p>
        <p>{currScore}</p>
      </span>
      <span className="flex flex-row justify-between mt-1 text-lg">
        <p className="text-left text-muted">Highest Score</p>
        <p className="text-accent font-semibold">{highScore}</p>
      </span>
      <div className="flex flex-row justify-between">
        <button
          onClick={reStartGame}
          className="bg-accent hover:bg-accent-hover text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 w-36 me-8"
        >
          {gameStatus ? "Restart" : "Play Again"}
        </button>
        <button
          onClick={returnFn}
          className="bg-card hover:border-accent border border-card-border text-foreground px-8 py-2 rounded-lg font-medium transition-colors mt-8"
        >
          Change Mode
        </button>
      </div>
    </>
  );
}

export default NormalComp;
