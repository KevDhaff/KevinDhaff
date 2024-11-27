import React from 'react';

export default function Review({ reviews }) {
    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length == 0 ? (
                <p>No reviews available for this game.</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.review}:</strong> {review.content}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}