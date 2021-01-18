import { createGlobalStyle } from 'styled-components';

import HelveticaNeueBd from '../fonts/HelveticaNeueLTStd-Bd.otf';
import HelveticaNeueLt from '../fonts/HelveticaNeueLTStd-Lt.otf';
import HelveticaNeueMd from '../fonts/HelveticaNeueLTStd-Md.otf';
import HelveticaNeueRoman from '../fonts/HelveticaNeueLTStd-Roman.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue LT Std';
    src: url(${HelveticaNeueBd}) format('otf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Helvetica Neue LT Std';
    src: url(${HelveticaNeueLt}) format('otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Helvetica Neue LT Md';
    src: url(${HelveticaNeueMd}) format('otf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Helvetica Neue LT Roman';
    src: url(${HelveticaNeueRoman}) format('otf');
    font-weight: 700;
  }
`;