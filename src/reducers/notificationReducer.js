const initialState = 'Alkuarvo'

export const setNotification = (info) => {
    return {
        type: 'SET_INFO',
        data: { info }
    }
}

export const delNotification = () => {
    return {
        type: 'DEL_INFO'
    }
}

const notificationReducer = (store = initialState, action) => {
    console.log('ACTION: ', action)
    switch (action.type) {
        case 'SET_INFO':
            return [action.data.info]
        case 'DEL_INFO':
            return ""
        default:
            return store
    }
}


export default notificationReducer