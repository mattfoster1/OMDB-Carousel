// http://www.omdbapi.com/?i=tt3896198&apikey=6b9b4900
import react from 'react';

class Carousel extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://www.omdbapi.com/?i=tt5024912&apikey=6b9b4900")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
            });
            console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        console.log(this.state);
        console.log(items);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {/* {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.price}
                </li>
              ))} */}
            </ul>
          );
        }
      }
}


export { Carousel }