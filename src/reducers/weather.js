const defaultState = {
  searchLocation: '',
  weatherData: [],
  error: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
