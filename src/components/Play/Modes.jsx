import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Modes({ setGameMode }) {
  const navigate = useNavigate();
  const BlitzFn = async () => {
    await setGameMode("default");
    navigate("/play/blitz");
  };
  const NormalFn = async () => {
    await setGameMode("default");
    navigate("/play/normal");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setGameMode("default")}
        className="absolute right-4 -top-4 text-foreground hover:text-accent"
      >
        <Undo2 size={20} />
      </button>
      <h1 className="text-2xl font-semibold">Select Mode</h1>
      <div className="flex flex-row justify-between">
        <button
          onClick={BlitzFn}
          className="bg-card hover:border-accent border border-card-border w-44 text-foreground px-8 py-2 rounded-lg font-medium transition-colors mt-8 me-5"
        >
          Blitz Mode
        </button>
        <button
          onClick={NormalFn}
          className="bg-card hover:border-accent border border-card-border w-44 text-foreground px-8 py-2 rounded-lg font-medium transition-colors mt-8"
        >
          Normal Mode
        </button>
      </div>
    </div>
  );
}

export default Modes;
