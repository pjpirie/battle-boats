import React from "react";
import styled from "@emotion/styled";
import { wh } from "../../../libs/styles";
import useBattleboats from "../../../libs/game/useBattleboats";

const Board = styled.div`
  display: grid;
  ${wh("100vw")}
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

export const Gameboard = () => {
  const { game, board } = useBattleboats();
  return (
    <Board>
      {board}
    </Board>
  );
};
