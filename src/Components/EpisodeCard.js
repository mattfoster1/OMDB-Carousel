import { Component } from 'react';
// import image from '../resources/images/ep1.jpg';

class EpisodeCard extends Component {
  render() {
    const { Title, Para, Image } = this.props;

    return (
      <div>
        <img src={Image} alt={Title}/>
        <h3>{Title}</h3>
        <p>{Para}</p>
      </div>
    )
  }
}

export { EpisodeCard }