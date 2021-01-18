import { Component } from 'react';
import styled from 'styled-components';

const gutterWidth = `15px`;

const EpisodeCardContent = styled.div`
  padding: ${gutterWidth};
  color: #fff;
  position: relative;
`;

const EpisodeImage = styled.img`
  width: 100%;
`;

const EpisodeCardNumber = styled.div`
  background-color: #fff;
  height: 30px;
  width: 30px;
  color: #000;
  position: absolute;
  top: ${gutterWidth};
  left: ${gutterWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding-top: 0.3em;
  box-sizing: border-box;
`;

class EpisodeCard extends Component {
  render() {
    const { Title, Para, Image, EpisodeNumber } = this.props;

    return (
      <EpisodeCardContent>
        <EpisodeCardNumber>{EpisodeNumber}</EpisodeCardNumber>
        <EpisodeImage src={Image} alt={Title}/>
        <h3>{Title}</h3>
        <p>{Para}</p>
      </EpisodeCardContent>
    )
  }
}

export { EpisodeCard }