import TopCardImage from './TopCardImage';
import CardBottomText from './CardBottomText';

function MyPicCard(props) {
  return (
    <article className='tour-card'>
      <TopCardImage />
      <CardBottomText town={props.town} />
    </article>
  );
}

export default MyPicCard;
