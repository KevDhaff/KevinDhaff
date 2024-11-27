import { useLocation } from "react-router-dom"
export default function Game() {
    const location = useLocation()
    const game = location.state.game;
    return(
        <>
            <h1>{game.name}</h1>
            <p><strong>Description: </strong>{game.description}</p>
            <p><strong>Publisher: </strong> {game.publisher}</p>
            <p><strong>Developer: </strong> {game.developer}</p>

            <h3>Reviews:</h3>
            {game.reviews.length > 0 ? (game.reviews.map((review, index) => (
            <div key={index}>
                <p>{review.review}</p>
            </div>
            ))
            ) : (
                <p>No reviews available for this game.</p>
            )}
        </>
    )
}