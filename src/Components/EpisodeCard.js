import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const EpisodeCardTitle = styled.div`
  font-family: 'Helvetica Neue LT Std';
  font-weight: 700;
  padding: 18px 0 10px;
`;


class EpisodeCard extends Component {
  render() {
    const { Title, Para, Image, EpisodeNumber } = this.props;

    return (
      <EpisodeCardContent>
        <EpisodeCardNumber>{EpisodeNumber}</EpisodeCardNumber>
        <EpisodeImage src={Image} alt={Title}/>
        <EpisodeCardTitle>{Title}</EpisodeCardTitle>
        <p>{Para}</p>
      </EpisodeCardContent>
    )
  }
}

EpisodeCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Para: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  EpisodeNumber: PropTypes.string.isRequired
}

export { EpisodeCard }