import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [highScore, setHighScore] = useState(0);
  const [gameMode, setGameMode] = useState("default");

  const value = {
    highScore,
    setHighScore,
    gameMode,
    setGameMode,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
