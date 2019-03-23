import { combineReducers } from 'redux'
import {
  REQUEST_AGENTS,
  RECEIVE_AGENTS,
  SORT_AGENTS,
} from '../actions'

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

export const sortAgents = (state = { order: 'asc', orderBy: 'status' }, action) => {
  switch (action.type) {
    case SORT_AGENTS:
      return {
        order: action.order,
        orderBy: action.orderBy,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  agents,
  sortAgents,
})

export default reducers
