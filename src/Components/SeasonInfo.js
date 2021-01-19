import { Component } from 'react';
import styled from 'styled-components';

import { minWidth } from '../resources/styles/styles';

const SeasonInfoContent = styled.div`
  color: #fff;
  margin-bottom: 48px;

  @media ${minWidth.sm} {
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

  @media ${minWidth.sm} {
    font-size: 72px;
  }
`;

const Synopsis = styled.p`
    font-size: 24px;
    margin: 0;
`;

class SeasonInfo extends Component {
    render() {
        const { seasonNumber, SeriesTitle, Plot } = this.props;
        return(
            <SeasonInfoContent>
                <SeasonNumber>Season {seasonNumber}</SeasonNumber>
                <Title>{SeriesTitle}</Title>
                <Synopsis>{Plot}</Synopsis>
            </SeasonInfoContent>
        )
    }
}

export { SeasonInfo }