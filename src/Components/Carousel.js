import { Component } from 'react';

import { StyledSlider, CarouselArrow } from '../resources/styles/styles';

import { EpisodeCard } from './EpisodeCard';


class Carousel extends Component {
    
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.6,
      slidesToScroll: 3,
      prevArrow: <CarouselArrow arrowType={'previous'}/>,
      nextArrow: <CarouselArrow arrowType={'next'}/>,
    };
    
    const { EpisodesData } = this.props;
    const imagePath = `${process.env.PUBLIC_URL}/images/`;

    return (
      <div>
        <StyledSlider {...settings}>
          {EpisodesData.map((Episode) => { 
            return (
                <EpisodeCard 
                  key={Episode.Episode}
                  EpisodeNumber={Episode.Episode}
                  Image={imagePath + `ep` + Episode.Episode + `.jpg`}
                  Title={Episode.Title} 
                  Para={"***hardcoded placeholder text***"}
                />
            ) 
          })}
        </StyledSlider>
      </div>
    );
  }
}


export { Carousel }