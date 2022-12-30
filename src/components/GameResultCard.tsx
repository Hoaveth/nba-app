import React from "react";
import { Games } from "./model/GamesModel";
import "./styles/styles.css";
import { TEAM_LOGO } from "../utils/contants";

interface Props {
  game: Games;
}

const GameResultCard = ({ game }: Props) => {
  console.log(game);
  return (
    <>
      <span className="card__status">
        {game.status + " - "}{" "}
        {game.period === 0
          ? "Not Started"
          : game.period === 4
          ? "Game Ended"
          : "On-going"}
      </span>
      <div className="card__container">
        <div className="card__hometeam">
          <img
            src={TEAM_LOGO[game.home_team.full_name]}
            className="card__logo"
          />
          <span>{game.home_team_score}</span>
        </div>
        <span>vs</span>
        <div className="card__awayteam">
          <img
            src={TEAM_LOGO[game.visitor_team.full_name]}
            className="card__logo"
          />
          <span>{game.home_team_score}</span>
        </div>
      </div>
    </>
  );
};

export default GameResultCard;
