import BtnBlack from './BtnBlack';

// CardBottomText() move to separate file and import
function CardBottomText() {
  return (
    <div>
      <p className='title--card'>New York</p>
      <p className='tour__date'>Fri 27 Nov 2016</p>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
      <BtnBlack />
    </div>
  );
}

export default CardBottomText;
