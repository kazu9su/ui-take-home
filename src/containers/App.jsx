import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAgents, elapsedTime, sortAgents } from '../actions'
import Agents from '../components/Agents'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getSorting, stableSort } from '../common/sort'

class App extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    onSortRequested: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { onLoad } = this.props
    onLoad()
  }

  render() {
    const { agents, order, orderBy, onSortRequested } = this.props
    const isEmpty = agents === undefined
    return (
      <MuiThemeProvider>
        {agents == undefined ? <h2>Empty.</h2>
        : <div>
            <div>
              <Agents
                agents={agents}
                sortAgents={onSortRequested}
                order={order}
                orderBy={orderBy}
              />
            </div>
          </div>
        }
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  let {
    items: agents,
  } = state.agents || {
    items: [],
  }

  const order = state.sortAgents.order
  const orderBy = state.sortAgents.orderBy

  if (agents === undefined) {
    agents = []
  } else {
    agents = stableSort(agents, getSorting(order, orderBy))
  }

  return {
    agents: agents,
    order: order,
    orderBy: orderBy,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetchAgents()),
  onSortRequested: (order, orderBy) => {
    dispatch(sortAgents(order, orderBy))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
