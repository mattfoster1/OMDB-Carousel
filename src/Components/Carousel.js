import { Component } from 'react';

import { EpisodeCard } from './EpisodeCard';
import { StyledSlider, CarouselArrow } from '../resources/styles';


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
    const imagePath = `${process.env.PUBLIC_URL}/`;

    return (
      <div>
        <StyledSlider {...settings}>
          {EpisodesData.map((Episode) => {         
            return (
              <EpisodeCard 
                key={Episode.Episode} 
                Image={imagePath + `images/ep` + Episode.Episode + `.jpg`}
                Title={Episode.Title} 
                Para={"***hardcoded placeholder text***"}
              />) 
          })}
        </StyledSlider>
      </div>
    );
  }
}


export { Carousel }