const agentStatusMap = {
  '0': {
    label: 'On Call',
    style: {
      backgroundColor: '#f7f06e'
    },
  },
  '1': {
    label: 'Waiting',
    style: {
      backgroundColor: '#c7ddae'
    },
  },
  '2': {
    label: 'Disposition',
    style: {
      backgroundColor: '#aabade'
    },
  },
  '3': {
    label: 'Unavailable',
    style: {
      backgroundColor: '#dd9dbf'
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
