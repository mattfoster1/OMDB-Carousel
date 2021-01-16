import './App.css';
// import { Carousel } from './Components/Carousel.js';
import { Component } from "react";
import { getSeriesData } from './api/data';

class App extends Component {

  constructor() {
    super();
    this.state = { seriesData: [] };
  }

  async componentDidMount() {

    let seriesData = await getSeriesData();

    this.setState({ seriesData: seriesData })

    console.log("2" , this.state.seriesData);
  }
  render () {
    return (
      <div className="App">
        <main>
          {/* <Carousel></Carousel> */}
        </main>
      </div>
    );
  }
}

export default App;
