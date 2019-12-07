const Info = (props) => (
  <div role="img">
    {/* starEntry component goes to this component */}

    {/* The following line is NOT working
    {props.state.reviewStars.map((reviewStar) => (
      <StarEntry starEntry={reviewStar} />
    ))} */}

    <h2>{props.info.review + ' Reviews'}</h2>
    <h2>{'$' + props.info.pricePerPersonLow + ' to $' + props.info.pricePerPersonHigh}</h2>
    <h2>{props.info.category}</h2>
  </div>
);

export default Info;