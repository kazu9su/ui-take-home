import jsonfile from 'jsonfile'

export const REQUEST_AGENTS = 'REQUEST_AGENTS'
export const RECEIVE_AGENTS = 'RECEIVE_AGENTS'

export const requestAgents = () => ({
  type: REQUEST_AGENTS,
})

export const receiveAgents = json => ({
  type: RECEIVE_AGENTS,
  agents: json,
})

export const fetchAgents = () => (dispatch) => {
  const file = 'src/resources/agents.json'
  return jsonfile.readFile(file)
    .then(obj => dispatch(receiveAgents(obj)))
    .catch(error => console.error(error))
}
