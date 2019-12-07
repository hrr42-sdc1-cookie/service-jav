const infoStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '16px',
};

const Info = (props) => (
  <div className='info' style={infoStyle} role="img">
    {/* starEntry component goes to this component */}

    {/* The following line is NOT working
    {props.state.reviewStars.map((reviewStar) => (
      <StarEntry starEntry={reviewStar} />
    ))} */}

    <p>{props.info.review + ' Reviews'}</p>
    <p>{'$' + props.info.pricePerPersonLow + ' to $' + props.info.pricePerPersonHigh}</p>
    <p>{props.info.category}</p>
  </div>
);

export default Info;