import { ADD_PLACES } from '../Action/action-types';
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
    default:
      return state;
  }
}
