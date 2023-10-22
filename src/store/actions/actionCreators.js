import {
    getBands,
    getAlbums,
    getSongs,
    getMembers
} from "../../services";
import {
    SET_BANDS,
    SET_ALBUMS,
    SET_MEMBERS,
    SET_SONGS,
    SET_GENRES
} from "./types";

export const setBands = () => async (dispatch) => {
    try {

        const { data } = await getBands();

        const allGenres = data.map(item=> JSON.parse(item.genres)).flat()
        const unicGenres = [...new Set(allGenres)] 

        dispatch({
            type: SET_GENRES,
            payload: unicGenres
        })
        dispatch({
            type: SET_BANDS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const setAlbums = id => async (dispatch) => {
    try {

        const { data } = await getAlbums(id);

        dispatch({
            type: SET_ALBUMS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const setSongs = id => async (dispatch) => {
    try {

        const { data } = await getSongs(id);

        dispatch({
            type: SET_SONGS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const setMembers = id => async (dispatch) => {
    try {

        const { data } = await getMembers(id);

        dispatch({
            type: SET_MEMBERS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
} 