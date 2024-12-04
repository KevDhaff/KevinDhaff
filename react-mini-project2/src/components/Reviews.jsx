import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", text: "Great product! Highly recommend." },
    { id: 2, name: "Jane Smith", text: "Good quality, fast shipping." },
    { id: 3, name: "Alice Johnson", text: "Not what I expected, but decent." },
  ]);

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      const newReview = {
        id: reviews.length + 1,
        name,
        text,
      };

      setReviews([...reviews, newReview]);
      setName('');
      setText('');
    }
  };

  return (
    <div className='reviews'>
      <h1>Customer Reviews</h1>
      <p>Check out what our customers are saying about our products!</p>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.name}:</strong> {review.text}
          </li>
        ))}
      </ul>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;