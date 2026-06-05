function Default({ setGameMode }) {
  return (
    <>
      <span className="eyebrow">Get set</span>
      <h1 className="mt-2 text-2xl font-bold">Ready for the challenge?</h1>
      <p className="mt-2 text-sm text-muted">
        Watch the pattern, then repeat it back.
      </p>
      <button
        onClick={() => setGameMode("mode")}
        className="btn-primary mt-8 w-full"
      >
        I'm Ready
      </button>
    </>
  );
}

export default Default;
