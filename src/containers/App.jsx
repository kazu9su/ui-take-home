import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAgents, elapsedTime } from '../actions'
import Agents from '../components/Agents'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAgents())
  }

  render() {
    const { agents } = this.props
    const isEmpty = agents === undefined
    return (
      <MuiThemeProvider>
        {agents == undefined ? <h2>Empty.</h2>
        : <div>
            <div>
              <Agents
                agents={agents}
              />
            </div>
          </div>
        }
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    items: agents,
  } = state.agents || {
    items: {},
  }

  return {
    agents,
  }

}

export default connect(mapStateToProps)(App)
