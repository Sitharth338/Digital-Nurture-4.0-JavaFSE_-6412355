import players from './Players';
function OddPlayers(){
    return (
      <div>
        <h2>Odd Indexed Players</h2>
        {players.map((player, index) =>
          index % 2 !== 0 ? <li key={index}>{player.name} - {player.score}</li> : null
        )}
      </div>
    );
}
export default OddPlayers;