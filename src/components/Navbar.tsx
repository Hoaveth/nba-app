import React from "react";
import CalendarIcon from "../assets/icons/calendar.png";
import StatsIcon from "../assets/icons/stats.png";
import PlayerIcon from "../assets/icons/player.png";

import "./styles/styles.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__item">
        <img src={CalendarIcon} />
        <span>Games</span>
      </div>
      <div className="navbar__item">
        <img src={StatsIcon} />
        <span>Standings</span>
      </div>
      <div className="navbar__item">
        <img src={PlayerIcon} />
        <span>Players</span>
      </div>
    </div>
  );
};

export default Navbar;
