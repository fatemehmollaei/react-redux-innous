import * as actionTypes from './actionTypes'


export const albumStart = () => {

    return {
        type: actionTypes.ALBUM_START
    }
}

export const albumSuccess = (data) => {
    return {
        type: actionTypes.ALBUM_SUCCESS,
        data: data,
    }
}

export const albumFail = (error) => {
    return {
        type: actionTypes.ALBUM_FAIL,
        error: error
    }
}

export const albumFilter = (selected) => {
    return {
        type: actionTypes.ALBUM_FILTER,
        selected: selected
    }
}

export const getAlbum = (link) => {
    return dispatch => {
        dispatch(albumStart())

        fetch(link,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response=>{
           return response.json();
        }).then(data => {
            dispatch(albumSuccess(data))
          })
        .catch(err => {
            dispatch(albumFail(err.message))
        })

    }
}
