const infoStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  // fontFamily: '"Josefin Sans", serif',
  margin: '0px 0px 15px 0px',
  fontSize: '16px',
  display: 'inline-block',
};

const divStyle = {
  width: '150px',
  fontWeight: 'bold',
  display: 'inline-block',
};

const innerDivStyle = {
  margin: '2px',
  display: 'inline-block',
};

const Info = (props) => (
  <div className='info' style={infoStyle} role="img">
    {/* starEntry component goes to this component */}

    {/* The following line is NOT working
      {props.state.reviewStars.map((reviewStar) => (
        <StarEntry starEntry={reviewStar} />
      ))} */}

    <div style={divStyle}>
      <div style={innerDivStyle}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <title>icon/ic_review</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ic_review">
              <rect id="boundary" x="0" y="0" width="24" height="24"></rect>
              <path d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15 C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63 C15.6583354,20.8784924 16.0735425,20.9318337 16.4250008,20.7668198 C16.776459,20.6018059 17.0006314,20.2482681 17,19.86 L17,17 L19,17 C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305 20.1045695,4 19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,15 L5,6 L19,6 L19,15 Z" id="review" fill="#333333" fillRule="nonzero"></path>
            </g>
          </g>
        </svg>
      </div>
      <div style={innerDivStyle}>{props.info.numOfReviews + ' Reviews'}</div>
    </div>

    <div style={divStyle}>
      <div style={innerDivStyle}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <title>icon/ic_price_range</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ic_price_range">
              <rect id="boundary" x="0" y="0" width="24" height="24"></rect>
              <rect id="outside" stroke="#333333" strokeWidth="2" x="3" y="6" width="18" height="12" rx="2"></rect>
              <rect id="line" fill="#333333" x="3" y="6" width="3" height="3" rx="0.5"></rect>
              <rect id="line" fill="#333333" x="18" y="6" width="3" height="3" rx="0.5"></rect>
              <rect id="line" fill="#333333" x="3" y="15" width="3" height="3" rx="0.5"></rect>
              <rect id="line" fill="#333333" x="10" y="10" width="4" height="4" rx="2"></rect>
              <rect id="line" fill="#333333" x="18" y="15" width="3" height="3" rx="0.5"></rect>
            </g>
          </g>
        </svg>
      </div>
      <div style={innerDivStyle}>{'$' + props.info.pricePerPersonLow + ' to $' + props.info.pricePerPersonHigh}</div>
    </div>

    <div style={divStyle}>
      <div style={innerDivStyle}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <title>icon/ic_cuisine</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="icon/ic_cuisine">
              <g id="ic_cuisine">
                <rect id="boundary" x="0" y="0" width="24" height="24"></rect>
                <path d="M14.55,2 C14.2462434,2 14,2.24624339 14,2.55 L14,21 C14,21.5522847 14.4477153,22 15,22 L16,22 C16.5522847,22 17,21.5522847 17,21 L17,17 L18,17 C19.1045695,17 20,16.1045695 20,15 L20,7.45 C20,4.44004811 17.5599519,2 14.55,2 L14.55,2 Z M18,15 L16,15 L16,4.32 C17.2176535,4.88673047 17.9973291,6.10692278 18,7.45 L18,15 Z" id="Shape" fill="#333333" fillRule="nonzero"></path>
                <path d="M11,2 L6,2 C4.8954305,2 4,2.8954305 4,4 L4,11 C4,12.1045695 4.8954305,13 6,13 L7,13 L7,21 C7,21.5522847 7.44771525,22 8,22 L9,22 C9.55228475,22 10,21.5522847 10,21 L10,13 L11,13 C12.1045695,13 13,12.1045695 13,11 L13,4 C13,2.8954305 12.1045695,2 11,2 Z M11,11 L6,11 L6,4 L7,4 L7,8.5 C7,8.77614237 7.22385763,9 7.5,9 C7.77614237,9 8,8.77614237 8,8.5 L8,4 L9,4 L9,8.5 C9,8.77614237 9.22385763,9 9.5,9 C9.77614237,9 10,8.77614237 10,8.5 L10,4 L11,4 L11,11 Z" id="Shape" fill="#333333" fillRule="nonzero"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style={innerDivStyle}>{props.info.category}</div>
    </div>
  </div>
);

export default Info;