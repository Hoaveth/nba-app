import React, { useEffect } from "react";
import { API } from "../api/api";

const PlayerStats = () => {
  useEffect(() => {
    API.getPlayers().then((response: any) => {
      if (response.data) {
        console.log(response.data);
      }
    });
  });
  return <div>PlayerStats</div>;
};

export default PlayerStats;
