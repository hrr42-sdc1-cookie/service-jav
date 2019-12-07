import React from 'react';
import StarEntry from './starEntry.jsx';

const Review = (props) => (
  <div className='review' role="img">
    {props.state.reviewStars.map((reviewStar, idx) => (
      <StarEntry starEntry={reviewStar} key={idx} />
    ))}
  </div>
);

export default Review;