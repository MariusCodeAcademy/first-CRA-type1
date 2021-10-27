function TopSectionHeader(props) {
  return (
    <div>
      <h1 className='title title--main'>{props.title}</h1>
      <h6 className='title title--sub'>{props.subTitle}</h6>
      <p className='text--main'>{props.body}</p>
    </div>
  );
}

export default TopSectionHeader;
