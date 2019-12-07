const style = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '20px',
  margin: '2px 0px 0px 0px',
  display: 'inline-block',
};

const tagStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '16px',
  margin: '0px 0px 0px 10px',
  padding: '5px 20px 5px 20px',
  borderStyle: 'solid',
  borderColor: 'rgb(200,200,200)',
  borderWidth: '0.8px',
  borderRadius: '20px',
  display: 'inline-block',
};

const Tag = (props) => (
  <div className="tag">
    <div style={style}>Top Tags: </div>
    {props.tag.topTags.map((topTag, idx) => (
      <div key={idx} style={tagStyle}>{topTag}</div>
    ))}
  </div>
);

export default Tag;