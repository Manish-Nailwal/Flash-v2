import {
  Hourglass,
  ChartNoAxesCombined,
  Swords,
  MessageSquareText,
  ChevronRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="container mx-auto px-4 py-5 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <span className="inline-block mb-4 text-sm font-medium text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1">
            A Manish Labs experiment
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get Ready for the <span className="text-accent">Flash</span>{" "}
            Challenge
          </h1>
          <p className="text-lg text-muted mb-8">
            Challenge your memory and focus as you follow Flash's vibrant
            sequence. How far can you go without making a mistake?
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to={"/play"}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Play Free Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </NavLink>
            <Link
              to={"/features"}
              className="bg-transparent border border-card-border hover:border-accent px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Know More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/media/homepage/Hero.jpg"
            alt="Flash Challenge"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-5 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Game Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <Swords className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Color Sequence Challenges
              </h3>
              <p className="text-muted">
                Test your memory by recalling and repeating increasingly complex
                color patterns.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <ChartNoAxesCombined className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Progressive Difficulty</h3>
              <p className="text-muted">
                Experience growing challenges as the color sequences get longer
                and faster with each level.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-transform relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-accent text-white px-4 py-1 rounded-lg shadow-lg transform -rotate-12">
                  <span className="text-sm font-bold tracking-wider uppercase">
                    New Mode
                  </span>
                </div>
              </div>
              <Hourglass className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Blitz Mode</h3>
              <p className="text-muted">
                Race against the clock to complete each sequence before time
                runs out.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <MessageSquareText className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Feedback</h3>
              <p className="text-muted">
                Receive instant visual cues to guide you through each round,
                helping you improve your memory skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Test your memory and reflexes. Can you conquer Flash and set a new
            high score?
          </p>
          <NavLink
            to={"/play"}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg"
          >
            Play Now
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Home;
