import { SET_COUNTERS } from '../actions/counters'

export default function counterReducer (state = [], action) {
  switch (action.type) {
    case SET_COUNTERS:
      return action.counters
    default:
      return state
  }
}
