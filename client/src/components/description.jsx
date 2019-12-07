const descriptionStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '16px',
};

const Description = (props) => (
  <div className="description" style={descriptionStyle}>
    <p>{props.description.description}</p>
    {/* does 'read more' button goes to this component? */}
  </div>
);

export default Description;