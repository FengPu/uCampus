import { combineReducers } from 'redux';
import AwardLevel from './reducer_awardLevel';

const appReducer = combineReducers({
    awardLevel: AwardLevel
});


const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }
  
  export default rootReducer;