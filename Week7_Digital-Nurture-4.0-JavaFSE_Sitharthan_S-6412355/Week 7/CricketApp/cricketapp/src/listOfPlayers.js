import React from "react";
import players from "./Players";
function DisplayPlayers() {
  return (
    <div>
      <h2>List of Players</h2>
      {players.map((player, index) => (
        <li key={index}>
          Mr. {player.name}
          <span> {player.score} </span>
        </li>
      ))}
    </div>
  );
}
export default DisplayPlayers;
