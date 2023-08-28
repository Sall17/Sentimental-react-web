import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Image-slideshow.css'

import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.png';
import image4 from '../images/image_4.png';

const Slideshow = () => {
  return (
    <Carousel className="custom-carousel">
      <div>
        <img src={image1} alt="Slide 1" />
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
      </div>
      <div>
        <img src={image3} alt="Slide 3" />
      </div>
      <div>
        <img src={image4} alt="Slide 4" />
      </div>
    </Carousel>
  );
};

export default Slideshow;
