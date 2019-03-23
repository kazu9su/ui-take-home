const agentStatusMap = {
  '0': {
    label: 'On Call',
    style: {
      backgroundColor: 'yellow'
    },
  },
  '1': {
    label: 'Waiting',
    style: {
      backgroundColor: 'green'
    },
  },
  '2': {
    label: 'Disposition',
    style: {
      backgroundColor: 'blue'
    },
  },
  '3': {
    label: 'Unavailable',
    style: {
      backgroundColor: 'red'
    },
  },
  '4': {
    label: 'Logged Out',
    style: {
      backgroundColor: 'gray'
    },
  },
}

export default agentStatusMap
