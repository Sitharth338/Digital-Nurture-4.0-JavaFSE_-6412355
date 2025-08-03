import players from "./Players";
function EvenPlayers() {
  return (
    <div>
      <h2>Even Indexed Players</h2>
      {players.map((player, index) =>
        index % 2 === 0 ? (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ) : null
      )}
    </div>
  );
}
export default EvenPlayers;
