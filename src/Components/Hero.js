import photoGrid from '../Assets/photo-grid.png';

function Hero() {
    return (
      <>
        <section>
          <img src={photoGrid} className="hero--photo" alt="photos" />
          <h1 className='hero--logo'>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
      </>
    );
  }
  
  export default Hero;