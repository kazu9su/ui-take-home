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
import icons from './Agents/icons'

const progress = (plate, plates) => (
    plate / plates * 100
)

const Agents = ({ agents, order, orderBy, sortAgents }) => (
  <Table>
    <TableHead>
      <TableRow>
      {headerRows.map(
        row => (
          <TableCell
            key={row.id}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              onClick={() => sortAgents(orderBy === row.id && order === 'desc' ? 'asc' : 'desc', row.id) }
              active={orderBy === row.id}
              direction={order}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        )
      )}
      </TableRow>
    </TableHead>
    <TableBody>
      { agents.map(agent =>
        <TableRow key={agent.id}>
          <TableCell style={agentStatusMap[agent.status].style}>
            {agentStatusMap[agent.status].label}
          </TableCell>
          <TableCell>
            <Moment interval={1000} date={agent.status_updated_at} durationFromNow>
            </Moment>
          </TableCell>
          <TableCell>
            {agent.name}
          </TableCell>
          <TableCell>
            {agent.tier}
          </TableCell>
          <TableCell>
            {agent.status == 0 &&
                <div>{agent.category} | {agent.location} <LinearProgress variant="determinate" value={progress(agent.plate, agent.plates)} /></div>
            }
          </TableCell>
          <TableCell>
            {agent.plate + 1}
          </TableCell>
          <TableCell>
            <div>
            {agent.actions.map((action, i) =>
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
  agents: PropTypes.array.isRequired,
}

export default Agents
