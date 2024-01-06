import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="../../slider1.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="../../slider2.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="../../slider3.jpg" onDragStart={handleDragStart} role="presentation" />,
];

const Slider = () => {
  return (
    <AliceCarousel
    infinite 
    autoPlay  
    mouseTracking 
    autoPlayInterval={2000}
    // animationDuration={1000}
    disableDotsControls
    disableButtonsControls
    items={items} />
  );
}


export default Slider


