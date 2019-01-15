import React, { Component } from "react";
import CarFilter from "../car-filter/car-filter";
import CarList from "../car-list/car-list";

class App extends Component {
  onMarkChange = mark => {
    this.setState({
      mark: mark,
      model: ""
    });
  };

  onModelChange = model => {
    this.setState({
      model: model
    });
  };
  onStartPriceChange = startPrice => {
    this.setState({
      startPrice: startPrice
    });
  };
  onEndPriceChange = endPrice => {
    this.setState({
      endPrice: endPrice
    });
  };
  onStartYearChange = startYear => {
    this.setState({
      startYear: startYear
    });
  };
  onEndYearChange = endYear => {
    this.setState({
      endYear: endYear
    });
  };
  onClear = () => {
    this.setState({
      mark: "",
      model: "",
      startPrice: "",
      endPrice: "",
      startYear: "",
      endYear: ""
    });
  };
  state = {
    cars: [
      {
        mark: "Audi",
        model: "A6 TDI",
        year: "05/2014",
        price: 17300,
        img: "/images/a6.jpg"
      },
      {
        mark: "BMW",
        model: "M4",
        year: "01/2019",
        price: 75400,
        img: "./images/m4.jpg"
      },
      {
        mark: "Mercedes",
        model: "E220",
        year: "01/2005",
        price: 20000,
        img: "./images/e220.jpg"
      },
      {
        mark: "BMW",
        model: "320M",
        year: "01/2019",
        price: 30200,
        img: "./images/320m.jpg"
      },
      {
        mark: "BMW",
        model: "X5M",
        year: "01/2014",
        price: 60500,
        img: "./images/x5m.jpg"
      },
      {
        mark: "Mercedes",
        model: "G63",
        year: "01/2012",
        price: 110000,
        img: "./images/g63.jpg"
      },
      {
        mark: "BMW",
        model: "G63S",
        year: "01/2019",
        price: 560000,
        img: "./images/g63s.jpg"
      },
      {
        mark: "Audi",
        model: "A7 Sportback 50 TDI",
        year: "03/2012",
        price: 35400,
        img: "./images/a7.jpg"
      }
    ],
    mark: "",
    model: "",
    startPrice: "",
    endPrice: "",
    startYear: "",
    endYear: ""
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <CarFilter
              cars={this.state.cars}
              onMarkChange={this.onMarkChange}
              onModelChange={this.onModelChange}
              onStartPriceChange={this.onStartPriceChange}
              onEndPriceChange={this.onEndPriceChange}
              onStartYearChange={this.onStartYearChange}
              onEndYearChange={this.onEndYearChange}
              onClear={this.onClear}
            />
          </div>
          <div className="col-md-8">
            <CarList state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
