import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";

import "./Players.css";

export default function Player() {
  const [player, setPlayer] = useState([]);
  const closePopUp = () => {
    
  }

  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title"></p>
            <p>
              <button
                onClick={() => {
                  setPlayer(player);
                }}
              >
                <a href="#popup1" id="openPopUp">
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}

      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
