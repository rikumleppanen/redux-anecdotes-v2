import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(baseUrl + '/' + id)
    return response.data
}

const addNew = async (dataObj) => {
    const response = await axios.post(baseUrl, dataObj)
    return response.data
}

const update = async (anecdote) => {
    const response = await axios.put(baseUrl + '/' + anecdote.id, anecdote)
    return response.data
}


export default { getAll, getOne, addNew, update }
