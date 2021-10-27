import MyPicCard from './MyBottomCard/MyPicCard';

function BottomCardContainer() {
  return (
    <div className='tour-cards-container d-flex justify-around'>
      <MyPicCard />
      <MyPicCard />
      <MyPicCard />
    </div>
  );
}

export default BottomCardContainer;
