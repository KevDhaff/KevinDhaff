import React, {useState} from "react";
export default function FavoriteGames() {
    const [games, setGames] = useState(["Hades", "Risk of Rain 2", "Doomsday Hunters"])

    function handleAddGames(){
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])
        document.getElementById("gameInput").value = "";
    }
    function handleRemoveGame(index){
        const newGame = games.filter((games, i)=>i !==index)
        setGames(newGame)
    }

    return(
        <>
        <div>
            <h2>These are my Favorite Games</h2>
            <ul>
                {games.map((game, index) => <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>)}
            </ul>
            <input type="text" name="gameInput" id="gameInput"/>
            <button type="button" onClick={handleAddGames}>Add Game</button>
        </div>
        </>
    )
}