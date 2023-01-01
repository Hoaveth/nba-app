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

  const sortGames = (array: Games[]) => {
    let sortedGames = array.sort(function (a: Games, b: Games) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return sortedGames;
  };

  useEffect(() => {
    setIsLoading(true);
    let date = new Date();
    let previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    let today = moment(previous).format(DATE_FORMAT);

    let newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() - 2);
    let yesterday = moment(newDate).format(DATE_FORMAT);

    API.getGameResults(today, yesterday).then((response: any) => {
      if (response.data) {
        setGames(sortGames(response.data));
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
