import {
    SET_BANDS,
    SET_GENRES,
} from "../actions/types";

const initialState = {
    bands: [],
    genres: [],
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

        default:
            return state;
    }
};

export default bandsReducer;