import {
    getBands,
    getAlbums,
    getSongs,
    getMembers,
    getBandInformation
} from "../../services";
import {
    SET_BANDS,
    SET_GENRES,
    SET_BAND_INFORMATION,
    SET_BAND_SONGS
} from "./types";

export const setBands = () => async (dispatch) => {
    try {

        const { data } = await getBands();

        const allGenres = data.map(item => JSON.parse(item.genres)).flat()
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

export const setBandInformation = id => async (dispatch) => {
    try {

        const band = await getBandInformation(id);
        const members = await getMembers(id);
        const albums = await getAlbums(id);


        dispatch({
            type: SET_BAND_INFORMATION,
            payload: {
                band: band.data[0],
                members: members.data,
                albums: albums.data,
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export const setSongs = id => async (dispatch) => {
    try {
        const { data } = await getSongs(id);
        dispatch({
            type: SET_BAND_SONGS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}