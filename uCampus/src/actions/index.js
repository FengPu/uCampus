export const SELECT_AWARDLEVEL = 'SELECT_AWARDLEVEL';
export const SELECT_GRADE = 'SELECT_GRADE';
export const SELECT_REGION = 'SELECT_REGION';
export const SELECT_STAGE = 'SELECT_STAGE';

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