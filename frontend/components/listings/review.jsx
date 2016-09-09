import React from 'react';
import ReactStars from 'react-stars';

const Review = ({ review }) => (
  <div className="review cf">
    <p className="grayed">{review.username}</p>
    <div className="review-details">
      <ReactStars className="stars"
        count={5}
        value={review.rating}
        size={18}
        edit={false}
        color2={'#ffa700'} />
      <p>{review.comment}</p>
    </div>
  </div>
);

export default Review;
