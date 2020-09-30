import {
  SEARCH_SUCCESS,
  ADD_FAV,
  REMOVE_FAV,
  DELETE_FROM_LIST,
} from '../Action/action-types';
const inititalSearchState = {
  searchedPlaces: [],
};
export default function Search(state = inititalSearchState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        searchedPlaces: action.content,
      };
    default:
      return state;
  }
}
