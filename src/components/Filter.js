import React from 'react'
import { setFilter } from './../reducers/filterReducer'
import {connect} from 'react-redux'

class Filter extends React.Component {

    handleChange = (event) => {
        event.preventDefault()
        const content = event.target.value
        this.props.setFilter(content)

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

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default ConnectedFilter