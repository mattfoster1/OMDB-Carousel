import { Component } from 'react';
import styled from 'styled-components';

import { StyledSlider, breakpoints } from '../resources/styles/styles';

import { Arrow } from '../components/Arrow';
import { EpisodeCard } from './EpisodeCard';

import tailRight from '../resources/images/tail-right.png';

const CarouselArrow = styled(Arrow) `
  position: absolute;
  top: auto;
  left: auto;
  bottom: 0;
  right: ${props => props.arrowType === "previous" ? "64px" : "15px"};
  transform: translate(0);
  transform: scaleX(${props => props.arrowType === "previous" ? "-1" : "1"});
  width: 32px;
  height: 18px;
  background: url(${tailRight}) center no-repeat;
  z-index: 2;

  :before {
    content: "";
  }
`;


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
      responsive: [
        {
          breakpoint: breakpoints.sm,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
          }
        },
      ]
    };
    
    const { EpisodesData, cardClickHandler } = this.props;
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
                  onClick={cardClickHandler}
                />
            ) 
          })}
        </StyledSlider>
      </div>
    );
  }
}


export { Carousel }