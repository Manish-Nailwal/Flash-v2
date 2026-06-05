import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Repeat2,
  TrendingUp,
  Timer,
  Trophy,
  Zap,
  SunMoon,
  Infinity as InfinityIcon,
} from "lucide-react";
import DemoBoard from "../components/Play/DemoBoard";

const features = [
  {
    Icon: Repeat2,
    title: "Color Sequence Challenge",
    text: "Watch the flashing pattern, then repeat it back in order. Simple to learn, hard to master.",
  },
  {
    Icon: TrendingUp,
    title: "Progressive Difficulty",
    text: "Every round adds one more step. The sequence grows until your memory finally slips.",
  },
  {
    Icon: Timer,
    title: "Blitz Mode",
    text: "Race a 30-second clock and bank as many correct rounds as you can before time runs out.",
  },
  {
    Icon: Trophy,
    title: "Local High Scores",
    text: "Your best run is saved right in your browser. No sign-up, no server, no excuses.",
  },
  {
    Icon: Zap,
    title: "Instant Feedback",
    text: "Crisp visual flashes on every tile keep you locked into the rhythm of the pattern.",
  },
  {
    Icon: SunMoon,
    title: "Light & Dark",
    text: "Switch themes anytime from the top bar. The whole experience adapts to your eyes.",
  },
];

const modes = [
  {
    Icon: InfinityIcon,
    name: "Normal",
    text: "An endless sequence that grows one tile at a time. Push your recall as far as it goes.",
    to: "/play/normal",
  },
  {
    Icon: Timer,
    name: "Blitz",
    text: "Thirty seconds on the clock. Score as much as you can before time's up.",
    to: "/play/blitz",
  },
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#features") {
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* Hero */}
      <section className="container mx-auto pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 animate-fade-up">
            <span className="eyebrow">A Manish Labs experiment</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Watch the <span className="text-accent">flash</span>.
              <br />
              Repeat the pattern.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
              A fast, minimal color-sequence memory game. Follow the lights,
              repeat the order, and push your recall further with every round.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to={"/play"} className="btn-primary">
                Play Free Now
                <ChevronRight className="h-5 w-5" />
              </Link>
              <a href="#features" className="btn-secondary">
                See Features
              </a>
            </div>
            <p className="mt-6 text-sm font-mono text-muted">
              2 modes · no sign-up · saves your best
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-3xl shadow-glow">
              <DemoBoard />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto py-16 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Features</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Built to push your recall
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to train your memory, and nothing you don't.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                <f.Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modes */}
      <section className="container mx-auto py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Two ways to play</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Pick your mode
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modes.map((m) => (
            <div key={m.name} className="glass rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <m.Icon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-bold">{m.name} Mode</h3>
              </div>
              <p className="mt-4 text-muted leading-relaxed flex-grow">
                {m.text}
              </p>
              <Link to={m.to} className="btn-secondary mt-6 self-start">
                Play {m.name}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16">
        <div className="glass rounded-3xl px-6 py-14 text-center shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to test your memory?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            One board, four colors, and your own personal best to beat. How far
            can you go?
          </p>
          <Link to={"/play"} className="btn-primary mt-8 text-lg">
            Start Playing
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
