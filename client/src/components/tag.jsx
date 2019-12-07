const Tag = (props) => (
  <div className="tag">
    <h2>{props.tag.topTags}</h2>
    {/* Why props.tag.topTags[0] doesn't work */}
    {/* <h2>{props.tag.topTags[1]}</h2>
    <h2>{props.tag.topTags[2]}</h2> */}
  </div>
);

export default Tag;