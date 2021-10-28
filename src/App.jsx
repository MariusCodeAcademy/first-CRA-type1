import './App.css';
// import MyButton from './components/MyButton';
import BottomCardContainer from './components/BottomCardContainer';
import BottomSectionHeader from './components/BottomSectionHeader';
import MyArticle from './components/MyArticle';
import Tags from './components/Tags';
import TopSectionHeader from './components/TopSection/TopSectionHeader';
import MyArticleExpresion from './components/MyArticleExpresion';

const topSecionData = {
  title: 'The band!',
  subTitle: 'We love music',
  para: 'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cardName: 'Shop',
  cardImage: 'cart.jpg',
};

function App() {
  return (
    <div className='App'>
      <MyArticle>
        <p>This is a text than is my paragraph</p>
        <h4>Antraste</h4>
        <button>click me</button>
      </MyArticle>
      <MyArticleExpresion title='Exp title'>
        <p>Express yourself</p>
      </MyArticleExpresion>
      <section className='top container'>
        <TopSectionHeader
          title={topSecionData.title}
          subTitle={topSecionData.subTitle}
          body={topSecionData.para}
        />

        <div className='people-container d-flex justify-around'>
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
        </div>
      </section>
      <section className='black'>
        <div className='container'>
          <BottomSectionHeader
            title='Our new dates'
            subTitle='Book now before its too late'
          />
          <BottomCardContainer />
          <BottomSectionHeader title='Thank you' subTitle='See you soon' />
        </div>
      </section>
      <section className='extra container'>
        <Tags
          tag1='London'
          tag2='Paris'
          tag3='Viena'
          tag4='New York'
          tagSpecial='Alaska'
        />
      </section>
    </div>
  );
}

export default App;
