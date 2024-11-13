import React, { useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');

    const handleReviewChange = (e) => setReviewText(e.target.value);

    const handleSubmitReview = () => {

        if (reviewText == "") {
            alert("Please enter a review.");
            return;
        }

        const newReview = {
            text: reviewText,
            date: new Date().toLocaleDateString()
        };

        console.log("New Review Submitted:", newReview);

        setReviews((prevReviews) => [...prevReviews, newReview]);
        setReviewText('');
    };

    return (
        <div className='container'>
            <h2>Game Reviews</h2>
            <textarea
                value={reviewText}
                onChange={handleReviewChange}
                placeholder="Write your review here..."
            />
            <br />
            <button onClick={handleSubmitReview}>Submit Review</button>
            <div className="review-list">
                {reviews.length == 0 ? (
                    <p>No reviews yet. Be the first to submit a review!</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p>{review.text}</p>
                            <small>{review.date}</small>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}