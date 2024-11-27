import { Link } from "react-router-dom";

const games = [
    {
        id: 1,
        name: "Valorant",
        description: "A tactical first-person shooter that combines precise gunplay with unique character abilities, set in a near-future Earth.",
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            {review: "Valorant offers a refreshing take on the FPS genre with its blend of strategy and character abilities."},
            {review: "The game has a competitive edge that keeps players engaged and constantly improving."},
            {review: "A well-balanced game that rewards skill and teamwork."}
        ]
    },
    {
        id: 2,
        name: "Clash of Clans",
        description: "A mobile strategy game where players build and upgrade their village, train armies, and battle against other players.",
        publisher: "Supercell",
        developer: "Supercell",
        reviews: [
            {review: "Clash of Clans is addictive and offers a great mix of strategy and community."},
            {review: "The game encourages collaboration through clans and is constantly updated with new content."},
            {review: "A classic mobile game that has stood the test of time."}
        ]
    },
    {
        id: 3,
        name: "Mobile Legends: Bang Bang",
        description: "A multiplayer online battle arena (MOBA) game designed for mobile devices, featuring fast-paced 5v5 matches.",
        publisher: "Moonton",
        developer: "Moonton",
        reviews: [
            {review: "Mobile Legends is a great entry point for MOBA newcomers with its accessible gameplay."},
            {review: "The game has a vibrant community and frequent updates to keep it fresh."},
            {review: "A fun and competitive game that can be enjoyed with friends."}
        ]
    },
    {
        id: 4,
        name: "Honor of Kings",
        description: "A popular mobile MOBA game that features iconic Chinese historical and mythical characters in strategic 5v5 battles.",
        publisher: "Tencent Games",
        developer: "TiMi Studios",
        reviews: [
            {review: "Honor of Kings combines rich cultural elements with engaging gameplay."},
            {review: "The graphics are stunning for a mobile game, and the characters are well-designed."},
            {review: "A must-try for MOBA fans, especially those who appreciate Chinese mythology."}
        ]
    },
    {
        id: 5,
        name: "GTA V",
        description: "An open-world action-adventure game set in the fictional state of San Andreas, following three criminals as they plan heists and navigate the criminal underworld.",
        publisher: "Rockstar Games",
        developer: "Rockstar North",
        reviews: [
            {review: "GTA V is a landmark in gaming, offering a sprawling world and a rich narrative."},
            {review: "The freedom to explore and the depth of gameplay make it a standout title."},
            {review: "A game that sets the bar for open-world experiences."}
        ]
    }
];

export default function GameList() {
    return (
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/GameList/${game.id}`} state={{ game }}>{game.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}