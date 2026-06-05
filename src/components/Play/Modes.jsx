import { Undo2, Infinity as InfinityIcon, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Modes({ setGameMode }) {
  const navigate = useNavigate();
  const go = (path) => {
    setGameMode("default");
    navigate(path);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setGameMode("default")}
        aria-label="Back"
        className="absolute right-0 -top-2 text-muted hover:text-accent transition-colors"
      >
        <Undo2 size={20} />
      </button>
      <span className="eyebrow">Choose</span>
      <h1 className="mt-2 text-2xl font-bold">Select a mode</h1>
      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={() => go("/play/normal")}
          className="btn-secondary w-full justify-start"
        >
          <InfinityIcon className="h-5 w-5 text-accent" />
          Normal Mode
        </button>
        <button
          onClick={() => go("/play/blitz")}
          className="btn-secondary w-full justify-start"
        >
          <Timer className="h-5 w-5 text-accent" />
          Blitz Mode
        </button>
      </div>
    </div>
  );
}

export default Modes;
