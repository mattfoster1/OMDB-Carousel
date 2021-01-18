import { createGlobalStyle } from 'styled-components';

import HelveticaNeueBd from '../fonts/HelveticaNeueLTStd-Bd.otf';
import HelveticaNeueLt from '../fonts/HelveticaNeueLTStd-Lt.otf';
import HelveticaNeueMd from '../fonts/HelveticaNeueLTStd-Md.otf';
import HelveticaNeueRoman from '../fonts/HelveticaNeueLTStd-Roman.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue LT Bold';
    src: url(${HelveticaNeueBd}) format('otf');
  }

  @font-face {
    font-family: 'Helvetica Neue LT';
    src: url(${HelveticaNeueLt}) format('otf');
  }

  @font-face {
    font-family: 'Helvetica Neue LT Md';
    src: url(${HelveticaNeueMd}) format('otf');
  }

  @font-face {
    font-family: 'Helvetica Neue LT Roman';
    src: url(${HelveticaNeueRoman}) format('otf');
  }
`;