import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { startUpdateLocation } from './../actions/weather';

class Header extends Component {
  state = {
    searchLocation: '',
    error: ''
  };

  onLocationChange = (e) => {
    const searchLocation = e.target.value;
    this.setState(() => ({ searchLocation }));
  };

  onLocationSubmit = (e) => {
    e.preventDefault();
    const searchLocation = this.state.searchLocation;
    if (searchLocation) {
      this.setState(() => ({ error: '' }));
      this.props.startUpdateLocation(searchLocation, () => {
        this.props.history.push({
          pathname: '/search',
          search: `?q=${searchLocation}`
        });
      });
    } else {
      this.setState(() => ({ error: 'Please enter a location' }));
    }
    this.setState(() => ({ searchLocation: '' }));
  };

  render() {
    const { error } = this.state;
    const inputGroupClass = `form-group ${error ? 'has-warning' : ''}`;
    const inputClass = `form-control mr-sm-2 ${error ? 'form-control-warning' : ''}`;

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <Link
            to="/"
            className="navbar-brand">Weather
          </Link>
          <form
            className="form-inline"
            onSubmit={this.onLocationSubmit}>
            <div className={inputGroupClass}>
              <input
                className={inputClass}
                value={this.state.searchLocation}
                type="search"
                placeholder="Location"
                aria-label="Search"
                onChange={this.onLocationChange}
                autoFocus
              />
              <div className="form-control-feedback">{error ? error : ''}</div>
            </div>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <br />
      </div>
    );
  }
};

const enhancer = compose(
  connect(null, { startUpdateLocation }),
  withRouter
);

export default enhancer(Header);
