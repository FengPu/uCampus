export const SET_CONTESTTYPE = 'SET_CONTESTTYPE';

export function setContestType(contestType){

    return{
      type: SET_CONTESTTYPE,
      payload: {
        contestType: contestType
      }
    }
  }