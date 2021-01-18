import { Component } from 'react';

import { SeasonNumber, Title, Synopsis } from '../resources/styles';

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