import React, {Component} from 'react'
import M from 'materialize-css';
import axios from 'axios'
import './App.css'

import Header from './Header';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      showModal: false,
    }
  }
  // GET API
  // Do not put in render!! 
  componentDidMount=()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    // console.log(url)
    axios.get(url).then((response) => {
      this.setState({
        temp: response.data.main.temp,
        cityName: response.data.name,
        weather: response.data.decription,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        icon: response.data.icon,
      })
    })
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  }

  render () {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

    return (
      <div className="App">
        <Header cityName={this.state.cityName} temp={this.state.temp} />
        <Modal
          icon={iconUrl}       
          cityName={this.state.cityName}
          high={this.state.high}
          low={this.state.low}
          weather={this.state.weather}
        />
      </div>
    )
  }
}

export default App;
