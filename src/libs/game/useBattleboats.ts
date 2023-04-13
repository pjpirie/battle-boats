import { useContext } from "react";
import { GameContext, GameType } from "./GameContext";

const useBattleboats = () => {
  const { game, setGame } = useContext(GameContext);

  const test = () => {
    setGame({ ...game ?? {}, type: GameType.AI });
  };

  return {
    game,
    test,
    setGame,
  };
};

export default useBattleboats;
