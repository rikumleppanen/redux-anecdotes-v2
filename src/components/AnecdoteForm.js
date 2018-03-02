import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote, asObject } from './../reducers/anecdoteReducer'
import { setNotification, delNotification } from './../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const dataObj = asObject(content)
    e.target.anecdote.value = ''
    const newOne = await anecdoteService.addNew(dataObj)
    this.props.createAnecdote(newOne)
    this.props.setNotification('You added ´' + content + '´')
    setTimeout(() => {
      this.props.delNotification()
    }, 5000)

  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  delNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
