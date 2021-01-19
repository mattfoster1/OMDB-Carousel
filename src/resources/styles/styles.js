import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  @media ${minWidth.md} {
      flex-direction: row;
  }
`;

const gutterWidthMain = {
  top: {
    mobile: `72px`,
    desktop: `96px`,
  },
  left: {
    mobile: `36px`,
    desktop: `96px`,
  },
  bottom: `72px`
};

const gutterWidthAside = `38px`;

const Main = styled.main`
  background: url(${poster}) center no-repeat;
  background-size: cover;
  padding-top: ${gutterWidthMain.top.mobile};
  padding-left: ${gutterWidthMain.left.mobile};
  padding-bottom: ${gutterWidthMain.bottom};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${minWidth.md} {
    padding-top: ${gutterWidthMain.top.desktop};
    padding-left: ${gutterWidthMain.left.desktop};
    max-width: 60%;
  }
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

export {Container, Main, BgrMask, minWidth, breakpoints, gutterWidthMain, gutterWidthAside }