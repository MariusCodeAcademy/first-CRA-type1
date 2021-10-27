function BottomSectionHeader(props) {
  return (
    <div className='sectionHeader'>
      <h2 className='title--main'>{props.title}</h2>
      <h6 className='title title--sub'>{props.subTitle}</h6>
    </div>
  );
}

export default BottomSectionHeader;
