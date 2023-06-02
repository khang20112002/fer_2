import React, { Component } from "react";
import "./Players.css";
import { Players } from "../shared/ListOfPlayers";

import { useState } from "react";

export default function PlayersPresentation() {
  const [player, setPlayer] = useState({});

  const closePopup = () => {
  };

  return (
    <>
      <div className="container">
        {Players.map((player) => (
          <div className="column" key={player.id}>
            <div className="card">
              <img src={player.img} alt={player.name} />
              <div className="card-body">
                <div className="title-body">
                  <h3>{player.name}</h3>
                </div>
                <p>{player.club}</p>
              </div>
              <button onClick={() => setPlayer(player)}>
                <a href="#popup1" id="openPopUp" style={{ color: 'white' }}>
                  Detail
                </a>
              </button>
            </div>
          </div>
        ))}

        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={player.img} alt={player.name} />
            <h2>{player.name}</h2>
            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>
            <div className="content">{player.info}</div>
          </div>
        </div>
      </div>
    </>
  );
}
