const initialState = ""

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        data: { filter }
    }
}

const filterReducer = (store = initialState, action) => {
    switch (action.type) {
        case ("SET_FILTER"):
            return action.data.filter
        default:
            return store
    }

}

export default filterReducer