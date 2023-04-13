import React, { useMemo, useState } from "react";
import { Gameboard } from "./components/game/Gameboard/gameboard";
import { GameContext, GameInfo } from "./libs/game/GameContext";
import "./reset.css";

function App() {
  const [game, setGame] = useState<GameInfo | undefined>();
  const GameContextValue = useMemo(() => {
    return { game, setGame };
  }, [game, setGame]);

  return (
    <GameContext.Provider value={GameContextValue}>
      <Gameboard />
    </GameContext.Provider>
  );
}

export default App;
