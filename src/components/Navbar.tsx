import React from "react";
import CalendarIcon from "../assets/icons/calendar.png";
import StatsIcon from "../assets/icons/stats.png";
import PlayerIcon from "../assets/icons/player.png";

import "./styles/styles.css";
import { GAMES, PLAYERS, STANDINGS } from "../utils/contants";

interface Props {
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ selectedNav, setSelectedNav }: Props) => {
  return (
    <div className="navbar__container">
      <div
        className="navbar__item"
        onClick={() => setSelectedNav(GAMES)}
        tabindex="-1"
      >
        <img src={CalendarIcon} />
        <span>Games</span>
      </div>
      <div
        className="navbar__item"
        onClick={() => setSelectedNav(STANDINGS)}
        tabindex="-1"
      >
        <img src={StatsIcon} />
        <span>Standings</span>
      </div>
      <div
        className="navbar__item"
        onClick={() => setSelectedNav(PLAYERS)}
        tabindex="-1"
      >
        <img src={PlayerIcon} />
        <span>Players</span>
      </div>
    </div>
  );
};

export default Navbar;
