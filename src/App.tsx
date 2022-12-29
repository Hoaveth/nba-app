import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="heading__container">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/10/15/11/basketball-4264543__480.png"
          className="heading__image"
        />
        <span>NBA APP</span>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
