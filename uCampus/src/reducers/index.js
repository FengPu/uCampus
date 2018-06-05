import { combineReducers } from 'redux';
import AwardLevel from './reducer_awardLevel';
import Region from './reducer_region';
import Stage from './reducer_stage';
import WritingContext from './reducer_writingContext';
import LevelUpHamburger from './reducer_levelUpHamburger';

const appReducer = combineReducers({
    awardLevel: AwardLevel,
    region: Region,
    stage: Stage,
    writingContext: WritingContext,
    levelUpHamburgerOpen: LevelUpHamburger
});


const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }
  
  export default rootReducer;