import {
  ADD_PLACES,
  SEARCH_SUCCESS,
  ADD_PLACE_TO_LIST,
  SHOW_TAB,
  ADD_FAV,
  REMOVE_FAV,
  DELETE_FROM_LIST,
} from './action-types';
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
export function searchedStates(content) {
  return {
    type: SEARCH_SUCCESS,
    content,
  };
}
export function addPlaceToList(place) {
  return {
    type: ADD_PLACE_TO_LIST,
    place,
  };
}
export function ShowTab(value) {
  return {
    type: SHOW_TAB,
    value,
  };
}
export function addToFav(place) {
  return {
    type: ADD_FAV,
    place,
  };
}
export function removeFromFav(place) {
  return {
    type: REMOVE_FAV,
    place,
  };
}
export function removeFromList(place) {
  return {
    type: DELETE_FROM_LIST,
    place,
  };
}
