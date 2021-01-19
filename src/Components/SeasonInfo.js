import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { minWidth } from '../resources/styles/styles';

const SeasonInfoContent = styled.div`
  color: #fff;
  margin-bottom: 48px;

  @media ${minWidth.md} {
    margin-bottom: 120px;
  }
`;

const SeasonNumber = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Title = styled.h1`
  font-family: 'Helvetica Neue LT Std';
  font-weight: 700;
  font-size: 48px;
  margin: 0;

  @media ${minWidth.md} {
    font-size: 72px;
  }
`;

const Synopsis = styled.p`
  font-size: 24px;
  margin: 0;
`;

class SeasonInfo extends Component {
  render() {
    const { SeasonNo, SeriesTitle, Plot } = this.props;
    return(
      <SeasonInfoContent>
        <SeasonNumber>Season {SeasonNo}</SeasonNumber>
        <Title>{SeriesTitle}</Title>
        <Synopsis>{Plot}</Synopsis>
      </SeasonInfoContent>
    )
  }
}

SeasonInfo.propTypes = {
  SeasonNumber: PropTypes.string,
  SeriesTitle: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired
}

export { SeasonInfo }