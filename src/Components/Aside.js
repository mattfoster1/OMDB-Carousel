import { Component } from 'react';
import styled from 'styled-components';

import { minWidth, gutterWidthAside } from '../resources/styles/styles';

const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media ${minWidth.sm} {
    max-width: 33.33%;
  }
`;

const AsideImage = styled.div`
  background: url(${props => props.Image}) center no-repeat;
  height: 65%;
  width: 100%;
  background-size: cover;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 50px ${gutterWidth};
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: solid 1px #979797;
`;

const AsideEpisodeInfo = styled.div`
  padding: 45px ${gutterWidth};
  
  > p {
    font-size: 19px;
    margin: 7px 0 0;
  }
`;

const AsideTitle = styled.h2`
  font-family: 'Helvetica Neue LT Std';
  font-weight: 700;
  margin: 0;
  font-size: 27px;
`;


function getFormattedDate(dateAsText) {
  const trueDate = new Date(dateAsText);
  const date = ("0" + trueDate.getDate()).slice(-2);
  const month = ("0" + (trueDate.getMonth() + 1)).slice(-2);
  const year = trueDate.getFullYear();

 return year + "-" + month + "-" + date;
}




class Aside extends Component {
  render() {
    const { Image } = this.props
    const { Title, Plot, Episode, Released, imdbRating } = this.props.ActiveEpisodeData;
    const formattedDate = getFormattedDate(Released);

    return (
      <AsideContent>
        <AsideImage Image={Image}/>
        <Stats>
          <span>Episode {Episode} – {formattedDate}</span>
          <span>{imdbRating}</span>
        </Stats>
        <Divider/>
        <AsideEpisodeInfo>
          <AsideTitle>{Title}</AsideTitle>
          <p>{Plot}</p>
        </AsideEpisodeInfo>
      </AsideContent>
    )
  }
}
  
  export { Aside }