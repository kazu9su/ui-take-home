import { combineReducers } from 'redux'
import { REQUEST_AGENTS, RECEIVE_AGENTS } from '../actions'

export const agents = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_AGENTS:
      return {
        ...state,
        items: {},
      }
    case RECEIVE_AGENTS:
      return {
        ...state,
        items: action.agents,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  agents,
})

export default reducers
