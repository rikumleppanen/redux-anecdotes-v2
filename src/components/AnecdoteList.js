import React from 'react'
import PropTypes from 'prop-types'
import { addAVote } from './../reducers/anecdoteReducer'
import { setNotification, delNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  clickAVote = (anecdote) => () => {
    this.context.store.dispatch(addAVote(anecdote.id))
    this.context.store.dispatch(setNotification('You liked ´' + anecdote.content + '´'))
    setTimeout(() => {
      this.context.store.dispatch(delNotification())
    }, 5000)
  }

  render() {
    const anecdotesToShow = () => {
      //return this.props.anecdotes
      return this.context.store.getState().anecdotes
    }
    const filtering = () => {
      return this.context.store.getState().filter
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow()
          .sort((a, b) => b.votes - a.votes)
          .filter(one => one.content.toLowerCase().indexOf(filtering().toLowerCase()) !== -1)
          .map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={this.clickAVote(anecdote)}>
                  vote
              </button>
              </div>
            </div>
          )}
      </div>
    )
  }
}
AnecdoteList.contextTypes = {
  store: PropTypes.object
}
//const mapStateToProps = (state) => {
//  return {
//    anecdotes: state.anecdotes,
//   notifications: state.notifications
//  }
//}

//const ConnectedAnecdoteList = connect()(AnecdoteList)

export default AnecdoteList
