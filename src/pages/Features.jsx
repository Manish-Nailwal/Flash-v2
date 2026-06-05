import { Brain, Zap, Trophy, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

function Features() {
  return (
    <div className="py-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Game Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">
          <div className="glass rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Brain className="text-accent" size={32} />
              <h2 className="text-2xl font-bold ml-4">Memory Improvement</h2>
            </div>
            <p className="text-muted">
              Enhance your cognitive abilities through challenging memory
              exercises and pattern recognition tasks designed to strengthen
              your retention and recall.
            </p>
          </div>

          <div className="glass rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Zap className="text-accent" size={32} />
              <h2 className="text-2xl font-bold ml-4">Reflex Improvement</h2>
            </div>
            <p className="text-muted">
              Sharpen your reaction time with fast-paced challenges. Train your
              reflexes to respond quickly and accurately under pressure.
            </p>
          </div>

          <div className="glass rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Trophy className="text-accent" size={32} />
              <h2 className="text-2xl font-bold ml-4">Local High Scores</h2>
            </div>
            <p className="text-muted">
              Your best score is saved right in your browser — no account
              needed. Beat your own record every time you play.
            </p>
          </div>

          <div className="glass rounded-lg p-8 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-6">
              <Clock className="text-accent" size={32} />
              <h2 className="text-2xl font-bold ml-4">Race Against Time</h2>
            </div>
            <p className="text-muted">
              Test your speed and accuracy in Blitz mode. Score as much as you
              can before the 30-second clock runs out.
            </p>
          </div>
        </div>

        <div className="mt-12 glass rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Challenge Yourself?</h2>
          <p className="text-muted mb-6">
            Start your journey to sharper memory and faster reflexes.
          </p>
          <NavLink
            to={"/play"}
            className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Playing Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Features;
