import { createContext } from "react";

export enum GameType {
  "DUEL",
  "AI",
}

type GameContextType = {
  game?: GameInfo;
  setGame: (gameInfo: GameInfo) => void;
};

export interface GameInfo {
  gameId?: string;
  type?: GameType;
  board: any;
}

/*eslint no-empty-function: "off"*/
export const GameContext = createContext<GameContextType>({
  setGame: () => {},
});
