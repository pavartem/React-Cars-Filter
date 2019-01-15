import React, { Component } from "react";
import "./car-filter.css";
class CarFilter extends Component {
  getCarMarks() {
    const result = [];
    const map = new Map();
    for (const item of this.props.cars) {
      if (!map.has(item.mark)) {
        map.set(item.mark, true); // set any value to Map
        result.push({
          mark: item.mark,
          model: item.model,
          year: item.year,
          price: item.price
        });
      }
    }
    return result.map(car => (
      <option value={car.mark.toLowerCase()} key={car.mark}>
        {car.mark}
      </option>
    ));
  }

  getCarModels() {
    var carsModel = this.props.cars.filter(
      item => item.mark.toLowerCase() === this.state.mark
    );

    return carsModel.map(car => (
      <option value={car.model.toLowerCase()} key={car.model}>
        {car.model}
      </option>
    ));
  }

  changeMark = event => {
    this.setState({ mark: event.target.value });
    this.props.onMarkChange(event.target.value);
  };

  changeModel = event => {
    this.setState({ model: event.target.value });
    this.props.onModelChange(event.target.value);
  };
  changeStartPrice = event => {
    this.setState({ startPrice: event.target.value });
    this.props.onStartPriceChange(event.target.value);
  };
  changeEndPrice = event => {
    this.setState({ endPrice: event.target.value });
    this.props.onEndPriceChange(event.target.value);
  };
  changeStartYear = event => {
    this.setState({ startYear: event.target.value });
    this.props.onStartYearChange(event.target.value);
  };
  changeEndYear = event => {
    this.setState({ endYear: event.target.value });
    this.props.onEndYearChange(event.target.value);
  };
  clear = () => {
    this.setState({
      mark: "",
      model: "",
      startPrice: "",
      endPrice: "",
      startYear: "",
      endYear: ""
    });
    this.props.onClear();
  };

  state = {
    mark: "",
    model: "",
    startPrice: "",
    endPrice: "",
    startYear: "",
    endYear: ""
  };

  render() {
    return (
      <div className="bg-white p-3" style={{ maxHeight: "400px" }}>
        <div className="btn btn-show btn-block mb-3" onClick={this.clear}>
          Очистити
        </div>
        <label htmlFor="mark">Марка:</label>
        <select
          className="custom-select mb-2 form-control"
          id="mark"
          onChange={this.changeMark}
          value={this.state.mark}
        >
          <option defaultValue="all" value="all">
            Всі
          </option>
          {this.getCarMarks()}
        </select>
        <label htmlFor="model">Модель:</label>
        <select
          className="custom-select mb-2 form-control"
          id="model"
          onChange={this.changeModel}
        >
          <option defaultValue="all" value="all">
            Всі
          </option>
          {this.getCarModels()}
        </select>
        <label htmlFor="price">Ціна:</label>
        <div className="input-group mb-2" id="price">
          <input
            type="number"
            className="col-6 form-control"
            value={this.state.startPrice}
            onChange={this.changeStartPrice}
          />
          <input
            type="number"
            className="col-6 form-control"
            value={this.state.endPrice}
            onChange={this.changeEndPrice}
          />
        </div>
        <label htmlFor="year">Рік:</label>
        <div className="input-group mb-2" id="year">
          <input
            type="number"
            className="col-6 form-control"
            value={this.state.startYear}
            onChange={this.changeStartYear}
          />
          <input
            type="number"
            className="col-6 form-control"
            value={this.state.endYear}
            onChange={this.changeEndYear}
          />
        </div>
      </div>
    );
  }
}

export default CarFilter;
