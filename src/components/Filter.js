import React from 'react'
import { setFilter } from './../reducers/filterReducer'
import PropTypes from 'prop-types'

class Filter extends React.Component {
    componentDidMount() {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleChange = (event) => {
        event.preventDefault()
        const content = event.target.value
        this.context.store.dispatch(setFilter(content))

    }
    render() {
        const style = {
            marginBottom: 10
        }

        return (
            <div style={style}>
                filter <input name="filterName" onChange={this.handleChange} />
            </div>
        )
    }
}

Filter.contextTypes = {
    store: PropTypes.object
}

export default Filter