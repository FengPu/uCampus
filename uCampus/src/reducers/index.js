import { combineReducers } from 'redux';
import ContestType from './reducer_contestType';

const appReducer = combineReducers({
    contestType: ContestType
});


const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }
  
  export default rootReducer;