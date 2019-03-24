import assert from 'power-assert'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Table from '@material-ui/core/Table'

configure({adapter: new Adapter()});

import Agents from './Agents'

const agents = [
  {
    id: 1,
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
]

const order = 'desc'
const orderBy = 'status'
const sortAgents = (order, orderBy) => {}

describe('Agents', () => {
  it('return', () => {
    const wrapper = shallow(
      <Agents
        agents={agents}
        order={order}
        orderBy={orderBy}
        sortAgents={sortAgents}
      />)
    assert.equal(wrapper.find(Table).length, 1)
  })
})
