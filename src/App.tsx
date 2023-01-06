import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { GAMES, STANDINGS } from "./utils/contants";
import GameResults from "./components/GameResults";
import Standings from "./components/Standings";
import Players from "./components/Players";

function App() {
  const [selectedNav, setSelectedNav] = useState<string>(GAMES);

  return (
    <div className="App">
      <div className="heading__container">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/10/15/11/basketball-4264543__480.png"
          className="heading__image"
        />
        <span>NBA APP</span>
      </div>

      <Navbar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <hr />

      <div className="main__container">
        <span className="selected">{selectedNav}</span>
        <div className="content__container">
          {selectedNav === GAMES ? (
            <GameResults />
          ) : selectedNav === STANDINGS ? (
            <Standings />
          ) : (
            <Players />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
