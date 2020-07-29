import React from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import data from "./data.json";

const dataLocator = `https://demo3211013.mockable.io/ajmad`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  // Use stored JSON data for mocking, to avoid calling API repeatedly over the network
  fetchData = async () => {
    try {
      // const response = await fetch(dataLocator);
      // const parsed = response.json();
      this.setState({ items: data });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Appliance Packages</h2>
        <p className="PageDescription">
          Looking for a great deal on home appliances? Packages are the best bet. Most
          appliance packages consist of a range, refrigerator, over-the-range microwave,
          and dishwasher. However, some upscale brands have packages that incorporate wall
          ovens, cooktops, and integrated refrigerators.
        </p>
        <div className="Filters">
          <strong>Select Appliances:</strong>
        </div>
        <div className="Appliances">
          {this.state.items.map((item, idx) => (
            <ItemCard item={item} key={item.sku} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
