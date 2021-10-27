import './App.css';
import desertImg from './assets/desert.jpg';

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
      <section className='top container'>
        <h1 className='title title--main'>{topSecionData.title}</h1>
        <h6 className='title title--sub'>{topSecionData.subTitle}</h6>
        <p className='text--main'>{topSecionData.para}</p>
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
          <h2 className='title--main'>Tour dates</h2>
          <h6 className='title title--sub'>Remember to book your tickets</h6>
          <div className='tour-cards-container d-flex justify-around'>
            <article className='tour-card'>
              <img src={desertImg} alt='cart' />
              <p className='title--card'>New York</p>
              <p className='tour__date'>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button className='btn--black'>Buy Tickets</button>
            </article>
            <article className='tour-card'>
              <img src={desertImg} alt='cart' />
              <p className='title--card'>New York</p>
              <p className='tour__date'>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button className='btn--black'>Buy Tickets</button>
            </article>
            <article className='tour-card'>
              <img src={desertImg} alt='cart' />
              <p className='title--card'>New York</p>
              <p className='tour__date'>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button className='btn--black'>Buy Tickets</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
