import React, { Component } from "react";
import M from "materialize-css";
import axios from "axios";
import "./App.css";

import Header from "./Header";
import Modal from "./Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      showModal: true,
      countryInput: "",
    };
    this.inputCityRef = React.createRef();
  }
  // GET API
  // Do not put in render!!
  componentDidMount = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    // console.log(url)
    axios.get(url).then((response) => {
      this.setState({
        temp: response.data.main.temp,
        cityName: response.data.name,
        weather: response.data.weather[0].decription,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        icon: response.data.weather[0].icon,
      });
    });
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  };
  // functions
  removeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.inputCityRef.current.value);
  };
  handleCountrySubmit = (e) => {
    e.preventDefault();
    console.log(this.state.countryInput);
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      countryInput: e.target.value,
    });
  };
  handleLabelClick = () => {
    this.inputCityRef.current.focus();
  };

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div className="App">
        <button onClick={this.removeModal}>Removr modal from the DOM</button>

        <div className="row">
          <div className="col s6">
            <form onSubmit={this.handleSubmit}>
              <label onClick={this.handleLabelClick}>Type a city: </label>
              <input type="text" ref={this.inputCityRef} />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <form onSubmit={this.handleCountrySubmit}>
              <label onClick={this.handleLabelClick}>Type a country: </label>
              <input type="text" onChange={this.handleChange} />
            </form>
          </div>
        </div>

        <Header cityName={this.state.cityName} temp={this.state.temp} />

        <button data-target="modal1" className="btn modal-trigger">
          Modal
        </button>

        {this.state.showModal ? (
          <Modal
            icon={iconUrl}
            cityName={this.state.cityName}
            high={this.state.high}
            low={this.state.low}
            weather={this.state.weather}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
