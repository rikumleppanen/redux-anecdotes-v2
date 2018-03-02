import anecdoteService from './../services/anecdotes'

//const getId = () => (100000 * Math.random()).toFixed(0)

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
export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}
export const createAnecdote = (data) => {
  return async (dispatch) => {
    const newOne = await anecdoteService.addNew(data)
    dispatch({
      type: 'CREATE',
      data: newOne
    })
  }
}

export const addAVote = (data) => {
  return async (dispatch) => {
    const newOne = await anecdoteService.update({ content: data.content, id: data.id, votes: data.votes })
    dispatch({
      type: 'VOTE',
      data: newOne
    })


  }
}

export default anecdoteReducer