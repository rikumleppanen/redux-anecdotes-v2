import React from 'react'
import { addAVote } from './../reducers/anecdoteReducer'
import { notification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  clickAVote = (anecdote) => async () => {
    await this.props.addAVote(anecdote)
    this.props.notification('You liked ´' + anecdote.content + '´', 5)
  }


  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  let list;
  if (filter.length === 0) {
    list = anecdotes
  }
  if (filter.length > 0) {
    list = anecdotes
      .filter(one => one.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  }
  return list.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notifications: state.notifications,
    filter: state.filter,
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}
const mapDispatchToProps = {
  addAVote,
  notification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
