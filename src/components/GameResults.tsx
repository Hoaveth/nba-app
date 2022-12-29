import React, { useState, useEffect } from "react";
import { Games } from "./model/GamesModel";
import { API } from "../api/api";
import moment from "moment";
import { Response } from "./model/ResponseModel";
import "./styles/styles.css";
import { DATE_FORMAT } from "../utils/contants";
import GameResultCard from "./GameResultCard";

const GameResults = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    let date = moment(new Date()).format(DATE_FORMAT);

    API.getGameResults(date).then((response: any) => {
      if (response.data) {
        setGames(response.data);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {isLoading ? <span className="loading__text">Loading...</span> : null}
      {games.length > 0 &&
        games.map((game) => {
          return <GameResultCard game={game} />;
        })}
    </div>
  );
};

export default GameResults;
