import React, { useState } from "react";
import "./styles/styles.css";
import { Games } from "./model/GamesModel";

const GameSchedule = () => {
  const [games, setGames] = useState<Games[]>([]);

  return (
    <div>
      {games.length === 0 ? (
        <button type={"button"} className="content__button--game">
          Load all Games
        </button>
      ) : null}
    </div>
  );
};

export default GameSchedule;
