import axios from 'axios';

import { selectWeather } from './../selectors/weather';

export const updateLocation = (payload) => {
  return {
    type: 'UPDATE_LOCATION',
    payload
  };
};

export const startUpdateLocation = (searchLocation, callback) => {
  return (dispatch, getState, api) => {
    searchLocation = searchLocation.toLowerCase();
    const newLocation = encodeURIComponent(searchLocation);
    const apiWithLocation = `${api}&q=${newLocation}`;
    axios.get(apiWithLocation)
      .then(({ data }) => {
        const searchLocation = data.city.name;
        const weatherData = selectWeather(data.list);
        dispatch(updateLocation({ searchLocation, weatherData, error: '' }));
        callback();
      }).catch(e => {
        dispatch(updateLocation({ error: 'No results found with this location' }));
        callback();
      });
  };
};
