export const SELECT_AWARDLEVEL = 'SELECT_AWARDLEVEL';
export const SELECT_GRADE = 'SELECT_GRADE';
export const SELECT_REGION = 'SELECT_REGION';
export const SELECT_STAGE = 'SELECT_STAGE';
export const SET_WRITING_CONTEXT = 'SET_WRITING_CONTEXT';
export const SET_LEVELUP_HAMBURGER_STATE = 'SET_LEVELUP_HAMBURGER_STATE';

export function selectLevel(awardLevel){

    return{
      type: SELECT_AWARDLEVEL,
      payload: {
        awardLevel
      }
    }
  }

export function selectGrade(grade){

  return{
    type: SELECT_GRADE,
    payload: {
      grade
    }
  }
}


export function selectRegion(region){

  return{
    type: SELECT_REGION,
    payload: {
      region
    }
  }
}


export function selectStage(tryoutOrFinal){
  let name = (tryoutOrFinal == 'final')? '初賽' : '決賽';
  return{
    type: SELECT_STAGE,
    payload: {
      tryoutOrFinal: tryoutOrFinal,
      statusName: name,
      statusButton: (tryoutOrFinal == 'final')? 'tryout' : 'final'
    }
  }
}



export function setCurrentWritingContext(context){
  return{
    type: SET_WRITING_CONTEXT,
    payload: {
      context
    }
  }
}


export function setLevelUpHamburgerState(state){
  return{
    type: SET_LEVELUP_HAMBURGER_STATE,
    payload: {
      state
    }
  }
}