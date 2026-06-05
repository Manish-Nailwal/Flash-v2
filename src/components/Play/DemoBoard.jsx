import { useEffect, useState } from "react";
import Color from "./Color";

const seq = [0, 2, 3, 1, 0, 3, 2, 1];

// A non-interactive, auto-playing board used as the hero visual.
export default function DemoBoard() {
  const [randIdx, setRandIdx] = useState(-1);

  useEffect(() => {
    let i = 0;
    let flashOff;
    const tick = setInterval(() => {
      setRandIdx(seq[i % seq.length]);
      i += 1;
      flashOff = setTimeout(() => setRandIdx(-1), 360);
    }, 820);
    return () => {
      clearInterval(tick);
      clearTimeout(flashOff);
    };
  }, []);

  return (
    <div className="pointer-events-none select-none">
      <Color btnPress={() => {}} randIdx={randIdx} />
    </div>
  );
}
