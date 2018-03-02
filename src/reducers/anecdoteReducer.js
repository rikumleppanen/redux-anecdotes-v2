
const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (store = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case ('VOTE'):
      const old = store.filter(a => a.id !== action.data.id)
      const voted = store.find(a => a.id === action.data.id)
      return [...old, { ...voted, votes: voted.votes + 1 }]

    case ('CREATE'):
      return [...store, { content: action.data.content, id: action.data.id, votes: action.data.votes }]
    case ('INIT'):
      return action.data
    default:
      return store
  }
}
export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT',
    data
  }
}
export const createAnecdote = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export const addAVote = (data) => {
  return {
    type: 'VOTE',
    data
  }
}

export default anecdoteReducer