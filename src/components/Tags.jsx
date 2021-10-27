function Tags(props) {
  return (
    <div className='tags'>
      <div className='tags__header'>
        <h3>Tags</h3>
      </div>
      <div className='tags-items d-flex'>
        <span className='tags__item tags__item--special'>
          {props.tagSpecial}
        </span>
        <span className='tags__item'>{props.tag1}</span>
        <span className='tags__item'>{props.tag2}</span>
        <span className='tags__item'>{props.tag3}</span>
        <span className='tags__item'>{props.tag4}</span>
      </div>
    </div>
  );
}

export default Tags;
