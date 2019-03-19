import assert from 'power-assert'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import Agents from './Agents'

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

describe('Agents', () => {
  it('return <ul>', () => {
    const wrapper = shallow(<Agents agents={agents} />)
    assert.equal(wrapper.find('Table').length, 1)
    assert.equal(wrapper.find('TableRow').length, 1)
  })
})
