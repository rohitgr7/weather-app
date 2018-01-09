import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startUpdateLocation } from './../actions/weather';
import WeatherData from './WeatherData';

class Search extends Component {
  getParameterByName = (name, url) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  componentDidMount() {
    const { search } = this.props.location;
    const searchLocation = this.getParameterByName('q', search);
    if (!search || !searchLocation) {
      this.props.history.push('/');
    } else {
      this.props.startUpdateLocation(searchLocation, () => {});
    }
  }

  render() {
    const { searchLocation, weatherData, error } = this.props;

    if (error) {
      return (
        <h4>{error}</h4>
      );
    } else if (!searchLocation) {
      return (<div>Loading....</div>);
    } else {
      return (
        <div>
          <h3>Location: {searchLocation}</h3>
          <WeatherData />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { searchLocation, weatherData, error } = state.weather;

  return {
    searchLocation,
    weatherData,
    error
  };
};

export default connect(mapStateToProps, { startUpdateLocation })(Search);
