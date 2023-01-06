import React, { useEffect } from "react";
import { API } from "../api/api";

const Players = () => {
  useEffect(() => {
    API.getAllPlayers().then((response: any) => {
      if (response.data) {
        console.log(response.data);
      }
    });
  });
  return <div>Players</div>;
};

export default Players;
