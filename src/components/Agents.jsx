import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import AgentStatusMap from './AgentStatusMap'

const progress = (plate, plates) => (
    plate / plates * 100
)

const Agents = ({ agents }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Status</TableCell>
        <TableCell>Time in State</TableCell>
        <TableCell>Agent Name</TableCell>
        <TableCell>Tier</TableCell>
        <TableCell>Current call</TableCell>
        <TableCell>Next Challenge</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody displayRowCheckbox={false}>
      { Object.keys(agents).map(id =>
        <TableRow key={id}>
          <TableCell style={AgentStatusMap[agents[id].status].style}>
            {AgentStatusMap[agents[id].status].label}
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
            {agents[id].actions.map((action, i) =>
              action
            )}
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
