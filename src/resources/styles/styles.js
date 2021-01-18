import styled from 'styled-components';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Arrow } from '../../components/Arrow';
import poster from '../images/poster.png';


const breakpoints = {
    sm: 642, 
    md: 1026, 
    lg: 1442, 
    xl: 1922, 
    xxl: 2560
}

const minWidth = {
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
    xxl: `(min-width: ${breakpoints.xxl}px)`,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Helvetica Neue LT Std';
    font-weight: 400;

    @media ${minWidth.sm} {
        flex-direction: row;
    }
`;

const gutterWidth = {
    left: `96px`,
    bottom: `72px`
};

const Main = styled.main`
  background: url(${poster}) center no-repeat;
  background-size: cover;
  padding-left: ${gutterWidth.left};
  padding-bottom: ${gutterWidth.bottom};
  width: 100%;
  max-width: 66.66%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BgrMask = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const Aside = styled.aside`
  background-color: palegoldenrod;
  width: 100%;
  max-width: 33.33%;
`;

const StyledSlider = styled(Slider)`
  /* max-width: 100%; */
`;

const CarouselArrow = styled(Arrow) `
  border: solid 1px hotpink;
`;

export {Container, Main, BgrMask, Aside, StyledSlider, CarouselArrow }