import React from 'react'
import { addAVote } from './../reducers/anecdoteReducer'
import { setNotification, delNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {

  clickAVote = (anecdote) => async () => {
    await this.props.addAVote(anecdote)
    const updated = await this.props.anecdotes.filter(a => a.id === anecdote.id)[0]
    await anecdoteService.update(updated)
    this.props.setNotification('You liked ´' + anecdote.content + '´')
    setTimeout(() => {
      this.props.delNotification()
    }, 5000)
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
  setNotification,
  delNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
