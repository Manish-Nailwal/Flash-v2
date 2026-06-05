function Default({ setGameMode }) {
  return (
    <>
      <h1 className="text-2xl font-semibold">Get Ready For Challenge!!</h1>
      <button
        onClick={() => setGameMode("mode")}
        className="bg-accent hover:bg-accent-hover w-44 text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 mx-auto"
      >
        I'm Ready
      </button>
    </>
  );
}

export default Default;
