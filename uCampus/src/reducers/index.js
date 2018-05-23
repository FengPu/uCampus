import { combineReducers } from 'redux';
import AwardLevel from './reducer_awardLevel';
import Region from './reducer_region';
import Stage from './reducer_stage';
import WritingContext from './reducer_writingContext';

const appReducer = combineReducers({
    awardLevel: AwardLevel,
    region: Region,
    stage: Stage,
    writingContext: WritingContext
});


const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }
  
  export default rootReducer;