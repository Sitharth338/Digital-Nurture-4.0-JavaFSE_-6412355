import players from "./Players";

function FilterPlayersByScore() {
    return(
        <div>
            <h2>Players Whose Score is Less Than 70</h2>
            {players
                .filter(player => player.score < 70)
                .map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))
            }
        </div>
    )
}

export default FilterPlayersByScore;