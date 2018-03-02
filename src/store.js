import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//import anecdoteReducer, {createAnecdote, addAVote} from './reducers/anecdoteReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const red = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
    filter: filterReducer
})

//console.log(red)
const store = createStore(red, composeWithDevTools(applyMiddleware(thunk)))

//store.subscribe(() =>
//  console.log(store.getState())
//)
//console.log(store.getState())


//store.dispatch(createAnecdote("combineReducers muodostaa yhdistetyn reducerin"))
//store.dispatch(addAVote(store.getState().anecdotes[0].id))

export default store

