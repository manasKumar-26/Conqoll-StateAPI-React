import {
  ADD_PLACES,
  ADD_PLACE_TO_LIST,
  SHOW_TAB,
  ADD_FAV,
  REMOVE_FAV,
  DELETE_FROM_LIST,
} from '../Action/action-types';
const initialState = {
  places: [],
  mylist: [],
  myfav: [],
  isFav: false,
};
export default function State(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACES:
      return {
        ...state,
        places: action.states,
      };
    case ADD_PLACE_TO_LIST:
      return {
        ...state,
        mylist: [action.place, ...state.mylist],
      };
    case SHOW_TAB:
      return {
        ...state,
        isFav: action.value,
      };
    case ADD_FAV:
      return {
        ...state,
        myfav: [action.place, ...state.myfav],
      };
    case REMOVE_FAV:
      const newArray = state.myfav.filter((place) => {
        const s =
          place.City === action.place.City &&
          place.State === action.place.State &&
          place.District === action.place.District;
        if (!s) {
          return place;
        }
      });
      return {
        ...state,
        myfav: newArray,
      };
    case DELETE_FROM_LIST:
      const newList = state.mylist.filter((place) => {
        const s =
          place.City === action.place.City &&
          place.State === action.place.State &&
          place.District === action.place.District;
        if (!s) {
          return place;
        }
      });
      const newFav = state.myfav.filter((place) => {
        const s =
          place.City === action.place.City &&
          place.State === action.place.State &&
          place.District === action.place.District;
        if (!s) {
          return place;
        }
      });
      return {
        ...state,
        mylist: newList,
        myfav: newFav,
      };
    default:
      return state;
  }
}
