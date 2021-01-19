import { Component } from 'react';
import styled from 'styled-components';

const gutterWidth = `38px`;

const AsideContent = styled.aside`
  /* padding: ${gutterWidth}; */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.33%;
`;

const AsideImage = styled.div`
  background-image: url(${props => props.Image});
  height: 50%;
  width: 100%;
  background-size: cover;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 0 ${gutterWidth};
`;



class Aside extends Component {
  render() {
    const { Image } = this.props
    const { Title, Episode, Released, imdbRating } = this.props.ActiveEpisodeData;
    console.log(this.props);

    return (
      <AsideContent>
        <AsideImage Image={Image}/>
        <Stats>
          <span>{Released}</span>
          <span>{imdbRating}</span>
        </Stats>
        <div>{Title}</div>
        <div>{Episode}</div>
      </AsideContent>
    )
  }
}
  
  export { Aside }