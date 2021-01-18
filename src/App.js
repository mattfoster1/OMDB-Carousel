import { Component } from 'react';

import GlobalFonts from './resources/styles/fonts';
import { Container, Main, BgrMask, Aside } from './resources/styles/styles';

import { Carousel } from './components/Carousel';
import { SeasonInfo } from './components/SeasonInfo';

import { getSeasonData, getShowData } from './api/data';

class App extends Component {
  constructor() {
    super();
    this.state = { seriesData: [] };
  }

  async componentDidMount() {
    const args = {
      seriesId: 'tt5024912',
      // apikey: '6b9b4900',
      apikey: '6df5320b',
      seasonInt: 1,
    }

    const seriesData = await getSeasonData(args);
    const showData = await getShowData(args);

    this.setState({ 
      seriesData: seriesData,
      showData: showData
    })

    console.log(this.state.seriesData);
    console.log(this.state.showData);
    
  }

  render () {
    const seasonNumber = this.state.seriesData.Season;
    const seriesTitle = this.state.seriesData.Title;
    const EpisodesData = this.state.seriesData.Episodes;

    if(!this.state.showData) {
      return <div>...Loading</div>;
    } else {

      let Plot = this.state.showData.Plot;

      return (
        <div className="App">
          <GlobalFonts />
          <Container>
            <Main>
              <SeasonInfo 
                SeasonNumber={seasonNumber} 
                SeriesTitle={seriesTitle}
                Plot={Plot}
              />
              <Carousel EpisodesData={EpisodesData}/>
              <BgrMask/>
            </Main>
            <Aside>
              Here is the aside content
            </Aside>
          </Container>
        </div>
      );
    }

  }
}

export default App;
