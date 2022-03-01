import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utiliy'

const initialState = {
    error: null,
    loading: false,
    selectedFilter:'ALL',
    data:null
}

const albumStart = (state) => {
    return updateObject(state, { error: null, loading: true,  data:null })
}

const albumSuccess = (state,action) => {
    return updateObject(state, { error: null, loading: false,  data:action.data })
}
const albumFail = (state,action) => {
    return updateObject(state, { error: action.error, loading: false,data:null })
}
const albumFilter = (state,action) => {
    return updateObject(state, { selectedFilter: action.selected })
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALBUM_START: return albumStart(state);
        case actionTypes.ALBUM_SUCCESS: return albumSuccess(state, action)
        case actionTypes.ALBUM_FAIL: return albumFail(state, action)
        case actionTypes.ALBUM_FILTER: return albumFilter(state, action)
        default: return state
    }
}

export default albumReducer;