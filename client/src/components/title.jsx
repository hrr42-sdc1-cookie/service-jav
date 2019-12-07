const titleStyle = {
  color: 'rgb(45, 51, 63)',
  // fontFamily: 'BrandonText', - Not able to load
  // fontFamily: 'Josefin Sans', - a good substitute for the BrandonText that OpenTable uses
  // <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
  // Use this for now
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '24px',
};

const Title = (props) => (
  <div className="title" style={titleStyle}>
    <h1>{props.title.title}</h1>
  </div>
);

export default Title;