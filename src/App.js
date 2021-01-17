import { Component } from 'react';

import './App.css';
// import { Carousel } from './components/Carousel';
import { SeasonInfo } from './components/SeasonInfo';
import { getSeasonData, getShowData } from './api/data';
import { Container, Main, Aside } from './resources/styles';

class App extends Component {

  constructor() {
    super();
    this.state = { seriesData: [] };
  }

  async componentDidMount() {
    const args = {
      seriesId: 'tt5024912',
      apikey: '6b9b4900',
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
    let Plot;

    if(!this.state.showData) {
      Plot = false;
    } else {
      Plot = this.state.showData.Plot;
    }

    return (
      <div className="App">
        <Container>
          <Main>
            <SeasonInfo 
              SeasonNumber={seasonNumber} 
              SeriesTitle={seriesTitle}
              Plot={Plot}
            />
            {/* <Carousel></Carousel> */}
          </Main>
          <Aside>
            Here is the aside content
          </Aside>
        </Container>
      </div>
    );
  }
}

export default App;
