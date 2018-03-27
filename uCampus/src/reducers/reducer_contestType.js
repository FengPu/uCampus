import { SET_CONTESTTYPE } from '../actions';

export default function (state = null, action) {
  if (action) {
    switch (action.type) {
      case SET_CONTESTTYPE:
        return action.payload;
      default:
        return {};
    }
  }
  return state;
}