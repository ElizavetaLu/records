import { SET_BAND_INFORMATION, SET_BAND_SONGS } from "../actions/types";

const initialState = {
    band: null,
    albums: [],
    songs: [],
    members: [],
}

const currentBandReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_BAND_INFORMATION:
            return {
                ...state,
                band: payload.band,
                members: payload.members,
                albums: payload.albums,
                songs: payload.songs,
            };
        case SET_BAND_SONGS:
            return {
                ...state,
                songs: payload,
            };

        default:
            return state;
    }
};

export default currentBandReducer;