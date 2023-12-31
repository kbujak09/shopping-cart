import first from '../images/1.webp';
import second from '../images/2.webp';
import third from '../images/3.jpg';
import CarouselItem from './CarouselItem.js';
import arrowPrevious from '../images/arrowPrevious.svg';
import arrowNext from '../images/arrowNext.svg';
import { useState } from 'react'; 

const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
    } 
    else {
      setActiveIndex((currentIndex) => currentIndex + 1);
    }
  }

  const previous = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
    }
    else {
      setActiveIndex((currentIndex) => currentIndex - 1);
    }
  }

  const items =  [
    {
      title: '1',
      image: first
    },
    {
      title: '2',
      image: second
    },
    {
      title: '3',
      image: third
    }
  ]
  
  let i = 0;

 
  return (
    <div className='carousel'>
      <div className='images'
      style={{ transform:  `translate(-${activeIndex * 100}%)`}}>
        {
        items.map((item) => {
        return <CarouselItem key={i++} item={item}/>
        })
      }
      </div>
      <div className='carouselButtons'>
        <button className='carouselPrevious' onClick={previous}><img src={arrowPrevious} alt='arrowPrevious'/></button>
        <button className='carouselNext'onClick={next}><img src={arrowNext} alt='arrowNext'/></button>
      </div>
    </div>
  );
}

export default Carousel;
