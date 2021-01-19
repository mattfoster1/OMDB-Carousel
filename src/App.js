import { Component } from 'react';

import GlobalFonts from './resources/styles/fonts';
import { Container, Main, BgrMask } from './resources/styles/styles';
import Carousel from './components/Carousel';
import SeasonInfo from './components/SeasonInfo';
import Aside from './components/Aside';
import { getSeasonData, getShowData, getEpisodeData } from './api/data';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      seriesData: [],
      activeEpisode: 2,
    };
  }

  async componentDidMount() {
    const args = {
      seriesId: 'tt5024912',
      apikey: '6df5320b',
      seasonInt: 1,
    }

    function getActiveEpisodeId(seriesData, activeEpisodeNo) {
      const activeEpisodeIndex = activeEpisodeNo - 1
      return seriesData.Episodes[activeEpisodeIndex].imdbID;
    };

    const seriesData = await getSeasonData(args);
    const showData = await getShowData(args);

    const activeEpisodeNo = this.state.activeEpisode;
    const activeEpisodeId = getActiveEpisodeId(seriesData, activeEpisodeNo);
    const activeEpisodeData = await getEpisodeData(args, activeEpisodeId);

    this.setState({ 
      seriesData: seriesData,
      showData: showData,
      activeEpisodeData: activeEpisodeData,
    })
  }

  switchActiveEpisode(newActiveEpisode = 4) {
    this.setState ({
      activeEpisode: newActiveEpisode
    });
  }
  
  render () {
    const { 
      activeEpisodeData, 
      activeEpisode,
      seriesData: {
        Season : seasonNumber, 
        Title : seriesTitle, 
        Episodes : EpisodesData 
      }
    } = this.state;

    const imagePath = `${process.env.PUBLIC_URL}/images/`;

    if(!this.state.showData) {
      return <div>...Loading</div>;
    } else {
      const Plot = this.state.showData.Plot;

      return (
        <div className="App">
          <GlobalFonts />
          <Container>
            <Main>
              <SeasonInfo 
                SeasonNo={seasonNumber} 
                SeriesTitle={seriesTitle}
                Plot={Plot}
              />
              <Carousel 
                EpisodesData={EpisodesData}
                cardClickHandler={this.switchActiveEpisode}
              />
              <BgrMask/>
            </Main>
            <Aside 
              ActiveEpisodeData={activeEpisodeData}
              Image={`${imagePath}ep${activeEpisode}.jpg`}
            />
          </Container>
        </div>
      );
    }
  }
}

export default App;
