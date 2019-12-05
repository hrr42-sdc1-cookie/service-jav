import React from 'react';
import StarEntry from './starEntry.jsx';

const Review = (props) => (
  <div role="img">
    {/* The following line is working */}
    {/* <h1>{props.state._data.title}</h1> */}
    
    {/* The following line is NOT working */}
    {props.state.reviewStars.map((reviewStar) => (
      <StarEntry starEntry={reviewStar} />
    ))}
  </div>
);

export default Review;