import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import LinearProgress from '@material-ui/core/LinearProgress'
import agentStatusMap from './Agents/agentStatusMap'
import headerRows from './Agents/headerRows'

const progress = (plate, plates) => (
    plate / plates * 100
)

const icons = (action, i) => {
  if (action == 'listen') {
    return (
      <svg key={i} xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
    )
  } else {
    return (<svg key={i}/>)
  }
}

const Agents = ({ agents, sortAgents }) => (
  <Table>
    <TableHead>
      <TableRow>
      {headerRows.map(
        row => (
          <TableCell
            key={row.id}>
            <TableSortLabel
              onClick={() => sortAgents(row.id) }
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        )
      )}
      </TableRow>
    </TableHead>
    <TableBody displayRowCheckbox={false}>
      { Object.keys(agents).map(id =>
        <TableRow key={id}>
          <TableCell style={agentStatusMap[agents[id].status].style}>
            {agentStatusMap[agents[id].status].label}
          </TableCell>
          <TableCell>
            <Moment interval={1000} date={agents[id].status_updated_at} durationFromNow>
            </Moment>
          </TableCell>
          <TableCell>
            {agents[id].name}
          </TableCell>
          <TableCell>
            {agents[id].tier}
          </TableCell>
          <TableCell>
            {agents[id].status == 0 &&
                <div>{agents[id].category} | {agents[id].location} <LinearProgress variant="determinate" value={progress(agents[id].plate, agents[id].plates)} /></div>
            }
          </TableCell>
          <TableCell>
            {agents[id].plate + 1}
          </TableCell>
          <TableCell>
            <div>
            {agents[id].actions.map((action, i) =>
              icons(action, i)
            )}
            </div>
          </TableCell>
        </TableRow>,
    )}
    </TableBody>
  </Table>
)

Agents.propTypes = {
  agents: PropTypes.object.isRequired,
}

export default Agents
