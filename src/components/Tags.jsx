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
        {props.tags.map((tag, indx) => (
          <span key={indx} className='tags__item'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
