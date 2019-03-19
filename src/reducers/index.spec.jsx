import assert from 'power-assert'
import { agents } from './'

describe('agents', () => {
  it('should return initial state', () => {
    assert.deepStrictEqual(agents(undefined, {}), {})
  })

  it('should handle REQUEST_AGENTS action', () => {
    const action = {
      type: 'REQUEST_AGENTS',
    }

    assert.deepStrictEqual(agents(undefined, action), {})
  })

  it('should handle RECEIVE_AGENTS action', () => {
    const agentsHash = {
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
    const action = {
      type: 'RECEIVE_AGENTS',
      agents: agentsHash,
    }

    assert.deepStrictEqual(agents(undefined, action), {
      items: agentsHash,
    })
  })
})
