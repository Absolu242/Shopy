import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Sections/Hero.css';
import store from '../../../data/store';
import HeroProduct from './Sections/HeroProduct';

function Hero () {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={4}
      isPlaying={true}
      interval={5000}
      infinite={true}
      orientation='vertical'
    >
      <Slider>

        {store.kit.filter ((item, limit) => limit < 4).map (item => (
          <Slide key={item.id}>
            <HeroProduct key={item.id} item={item} />
          </Slide>
        ))}
      </Slider>
      <DotGroup
        className="Dots"
      />
    </CarouselProvider>
  );
}

export default Hero;
