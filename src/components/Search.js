import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startUpdateLocation } from './../actions/weather';
import WeatherData from './WeatherData';

class Search extends Component {
  state = {
    qSearchState: ''
  }

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
    const { searchLocation } = this.props;
    const qSearch = this.getParameterByName('q', search);
    const { qSearchState } = this.state;
    if (!qSearchState && qSearch) {
      this.setState(() => ({ qSearchState: qSearch }));
    }
    if (!qSearch) {
      this.props.history.push('/');
    } else if (!searchLocation) {
      this.props.startUpdateLocation(qSearch, () => {});
    }
  }

  componentWillReceiveProps(nextProps) {
    const { search } = nextProps.location;
    const { qSearchState } = this.state;
    const qSearch = this.getParameterByName('q', search).toLowerCase();
    if (qSearchState.toLowerCase() != qSearch) {
      this.setState(() => ({ qSearchState: qSearch }));
      this.props.startUpdateLocation(qSearch, () => {});
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
