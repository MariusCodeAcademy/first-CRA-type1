import MyPicCard from './MyBottomCard/MyPicCard';

function BottomCardContainer() {
  return (
    <div className='tour-cards-container d-flex justify-around'>
      <MyPicCard town='Alaska' />
      <MyPicCard town='New York' />
      <MyPicCard town='Syberia' />
    </div>
  );
}

export default BottomCardContainer;
