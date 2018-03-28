import { SET_CONTESTTYPE } from '../actions';

// firstRound 初賽
// final 決賽

const defaultStatus = {
    contestType: 'firstRound'
  };

export default function (state = defaultStatus, action) {
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