import { ADD_PLACES } from './action-types';
export function addPlacesToStore(states) {
  return {
    type: ADD_PLACES,
    states,
  };
}
export function fetchPlaces() {
  const url = 'https://api.jsonbin.io/b/5f6f36127243cd7e824413e1';
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addPlacesToStore(data));
      });
  };
}
