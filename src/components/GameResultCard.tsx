import React from "react";
import { Games } from "./model/GamesModel";

interface Props {
  game: Games;
}

const GameResultCard = ({ game }: Props) => {
  return <div>{game.date}</div>;
};

export default GameResultCard;
