import laptop from '../assets/laptop.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero' >
      <h1 > Hi, I am <span className='hero-text'>SAKTI PRASAD</span></h1>  
      <img src={laptop} />
    </div>
    )
}

export default Hero