import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'

const Agents = ({ agents }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Time in State</TableHeaderColumn>
        <TableHeaderColumn>Agent Name</TableHeaderColumn>
        <TableHeaderColumn>Tier</TableHeaderColumn>
        <TableHeaderColumn>Current call</TableHeaderColumn>
        <TableHeaderColumn>Next Challenge</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      { Object.keys(agents).map(id =>
        <TableRow key={id}>
          <TableRowColumn>
            {agents[id].status}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].status_updated_at}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].tier}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].name}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].plate}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].plate + 1}
          </TableRowColumn>
          <TableRowColumn>
            {agents[id].actions.map((action, i) =>
              action
            )}
          </TableRowColumn>
        </TableRow>,
    )}
    </TableBody>
  </Table>
)

Agents.propTypes = {
  agents: PropTypes.object.isRequired,
}

export default Agents
