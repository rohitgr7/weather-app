import { createSelector } from 'reselect';

const getData = (weather) => {
  const { temp, pressure, humidity } = weather.main;
  const { speed } = weather.wind;
  return { temp, pressure, humidity, speed };
};

export const extractData = createSelector(getData, data => data);

export const selectWeather = list => {
  return list.filter((listItem, index) => index % 8 === 0);
};
