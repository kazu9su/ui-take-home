import assert from 'power-assert'
import thunk from 'redux-thunk'
import configMockStore from 'redux-mock-store'
import sinon from 'sinon'
import jsonfile from 'jsonfile'

const middleware = [thunk]
const mockStore = configMockStore(middleware)

import { requestAgents, receiveAgents, fetchAgents } from './'

describe('requestAgents', () => {
  it(' should return REQUEST_AGENTS action', () => {
    assert.deepStrictEqual(
      requestAgents(),
      {
        type: 'REQUEST_AGENTS',
      },
    )
  })
})

describe('receiveAgents', () => {
  it('should return RECEIVE_AGENTS action', () => {
    const agents = {
      '1': {
        name: 'James Milner',
        status: 0,
        status_updated_at: '2019-03-18T12:00Z',
        tier: 1,
        category: 'Medicare',
        location: 'NY',
        plate: 1,
        actions: [
          'listen'
        ],
      }
    }
    assert.deepStrictEqual(
      receiveAgents(agents),
      {
        type: 'RECEIVE_AGENTS',
        agents,
      },
    )
  })
})


describe('fetchAgents', () => {
  it('should set agents', (done) => {
    const store = mockStore({
      agents: [],
    })

    store.dispatch(fetchAgents())
      .then(() => {
        const dispatchedActions = store.getActions()

        assert.strictEqual(dispatchedActions.length, 1)

        const file = 'src/resources/agents.json'
        jsonfile.readFile(file)
          .then(obj => {
            assert.deepStrictEqual(dispatchedActions[0], receiveAgents(obj))
          })

          done()
      })
  })
})
