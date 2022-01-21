import { actionLinks } from "./actionTypes"
import { initialState } from "./initialState"


export function reducer(state = initialState, action) {

  switch (action.type) {
    case actionLinks:
      return {  link: action.payload }
    default: return state
  }

}