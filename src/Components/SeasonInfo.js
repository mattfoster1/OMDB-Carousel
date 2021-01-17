import { Component } from 'react';
import styled from 'styled-components';

const SeasonNumber = styled.p`
    color: hotpink;
`;

const Title = styled.h1`
  color: hotpink;
`;

const Synopsis = styled.p`
    color: hotpink;
`;

class SeasonInfo extends Component {
    render() {
        const { seasonNumber, SeriesTitle, Plot } = this.props;
        return(
            <div>
                <SeasonNumber>Season {seasonNumber}</SeasonNumber>
                <Title>{SeriesTitle}</Title>
                <Synopsis>{Plot}</Synopsis>
            </div>
        )
    }
}

export { SeasonInfo }