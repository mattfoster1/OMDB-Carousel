import { Component } from 'react';
import styled from 'styled-components';

const SeasonInfoContent = styled.div`
  color: #fff;
  margin-bottom: 120px;
`;

const SeasonNumber = styled.p`
    font-size: 24px;
    margin: 0;
`;

const Title = styled.h1`
  font-family: 'Helvetica Neue LT Std';
  font-weight: 700;
  font-size: 72px;
  margin: 0;
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