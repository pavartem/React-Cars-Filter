import React, { Component } from "react";
import "./car-list.css";
class CarList extends Component {
  getCarModels() {
    var carsModel = [];
    carsModel = this.props.state.cars.filter(
      car => car.mark.toLowerCase() === this.props.state.mark
    );

    if (this.props.state.model !== "" && this.props.state.model !== "all") {
      carsModel = carsModel.filter(
        car => car.model.toLowerCase() === this.props.state.model
      );
    }
    if (this.props.state.startPrice !== "") {
      carsModel = carsModel.filter(
        car => car.price >= parseInt(this.props.state.startPrice, 10)
      );
    }
    if (this.props.state.endPrice !== "") {
      carsModel = carsModel.filter(
        car => car.price <= parseInt(this.props.state.endPrice, 10)
      );
    }
    if (this.props.state.startYear !== "") {
      carsModel = carsModel.filter(
        car => car.year.slice(3) >= parseInt(this.props.state.startYear, 10)
      );
    }
    if (this.props.state.endYear !== "") {
      carsModel = carsModel.filter(
        car => car.year.slice(3) <= parseInt(this.props.state.endYear, 10)
      );
    }

    return carsModel.map(car => (
      <div className="border-left bg-white p-3" key={car.model}>
        <div className="row car-list border-bottom py-2">
          <div className="col-5">
            <img src={car.img} className="img-fluid" alt="" />{" "}
          </div>
          <div className="col-7">
            <h6 className="font-weight-bold text-center car-name">
              {car.mark} {car.model}
            </h6>
            <div className="row">
              <span className="font-weight-bold col-6 car-year">
                {car.year}
              </span>
              <span className="font-weight-bold col-6 car-price">
                {car.price} EUR
              </span>
              <p className="text-secondary col-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum
                consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    return this.getCarModels();
  }
}

export default CarList;
