import React, { Component } from "react";
import "./Films.css";
import { Films } from "./ListOfFilms";

export default class films extends Component {
  render() {
    return (
      <div className="container">
        {Films.map((Films) => (
          <div className="col">
            <div className="card">
              <img src={Films.image} />
              <h1>{Films.title}</h1>
              <p>{Films.year}</p>
              <p>{Films.nation}</p>
            </div>
          </div>
        ))}
      </div>
    );
    
  }
}
