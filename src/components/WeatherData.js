import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherListItem from './WeatherListItem';

class WeatherData extends Component {
  getWeatherList = (weatherData) => weatherData && weatherData.map((weather, index) => {
    return (<WeatherListItem key={weather.dt} weather={weather} day={index+1} />);
  });

  render() {
    const { weatherData } = this.props;
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Day</th>
              <th>Temperature (K)</th>
              <th>Pressure (mb)</th>
              <th>Humidity (%)</th>
              <th>Wind Speed (mph)</th>
            </tr>
          </thead>
          <tbody>
            {this.getWeatherList(weatherData)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
   return {
     weatherData: weather.weatherData
   };
};

export default connect(mapStateToProps)(WeatherData);
