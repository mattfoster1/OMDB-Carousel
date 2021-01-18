import { Component } from 'react';
class EpisodeCard extends Component {
    render() {
        const { Title, Para } = this.props;
        return (
            <div>
                <h3>{Title}</h3>
                <p>{Para}</p>
            </div>
        )
    }
}

export { EpisodeCard }