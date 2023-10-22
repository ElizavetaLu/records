import {
    SET_ALBUMS,
    SET_BANDS,
    SET_GENRES,
    SET_MEMBERS,
    SET_SONGS
} from "../actions/types";

const initialState = {
    bands: [],
    genres: [],
    albums: [],
    songs: [],
    members: [],
};

const bandsReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_BANDS:
            return {
                ...state,
                bands: payload
            };
        case SET_GENRES:
            return {
                ...state,
                genres: payload
            };

        case SET_ALBUMS:
            return {
                ...state,
                albums: payload
            };

        case SET_SONGS:
            return {
                ...state,
                songs: payload
            };

        case SET_MEMBERS:
            return {
                ...state,
                members: payload
            };

        default:
            return state;
    }
};

export default bandsReducer;