const initialState = 'Alkuarvo'

const notificationReducer = (store = initialState, action) => {
    console.log('ACTION: ', action)
    switch (action.type) {
        case 'SET_INFO':
            return action.info
        case 'DEL_INFO':
            return ""
        default:
            return store
    }
}

export const notification = (info, time) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_INFO',
            info
        })
        setTimeout(() => dispatch({
            type: 'DEL_INFO'
        }), time*1000)
    }
}


export default notificationReducer