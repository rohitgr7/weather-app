import React from 'react';
import { extractData } from './../selectors/weather';

const WeatherListItem = ({ weather, day }) => {
  const { temp, pressure, humidity, speed } = extractData(weather);
  return (
    <tr>
      <th scope="row">Day {day}</th>
      <td>{temp}</td>
      <td>{pressure}</td>
      <td>{humidity}</td>
      <td>{speed}</td>
    </tr>
  );
};

export default WeatherListItem;
