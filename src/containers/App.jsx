import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    actions: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAgents())
  }

  render() {
    const { agents } = this.props
    return (
      <MuiThemeProvider>
        <div style={{ paddingTop: 64 }}>
          <MainAppBar />
              <div>
                <Agents
                  agents={agents}
                />
              </div>
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    items: agents,
  } = state.agents || {
    items: [],
  }

  return {
    agents,
  }

}

export default connect(mapStateToProps)(App)
