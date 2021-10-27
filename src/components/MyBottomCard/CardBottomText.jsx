import BtnBlack from './BtnBlack';

// CardBottomText() move to separate file and import
function CardBottomText(props) {
  return (
    <div>
      <p className='title--card'>{props.town}</p>
      <p className='tour__date'>Fri 27 Nov 2016</p>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
      <BtnBlack />
    </div>
  );
}

export default CardBottomText;
