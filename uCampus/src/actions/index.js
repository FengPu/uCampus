export const SELECT_AWARDLEVEL = 'SELECT_AWARDLEVEL';

export function selectLevel(awardLevel){

    return{
      type: SELECT_AWARDLEVEL,
      payload: {
        awardLevel
      }
    }
  }