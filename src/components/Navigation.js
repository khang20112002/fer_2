import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <div className="Header">
          <div className="headerMenu">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
