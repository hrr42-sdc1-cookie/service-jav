import StarEntry from './starEntry.jsx';

const Review = (props) => (
  <div className ='review' role="img">
    <h2>{props.state._data.review + ' Reviews'}</h2>

    {/* The following line is NOT working */}
    {props.state.reviewStars.map((reviewStar) => (
      <StarEntry starEntry={reviewStar} />
    ))}
  </div>
);

export default Review;