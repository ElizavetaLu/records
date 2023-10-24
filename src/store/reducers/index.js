import { combineReducers } from "redux";
import bandsReducer from "./bandsReducer";
import currentBandReducer from "./currentBandReducer";


const rootReducers = combineReducers({
    bands: bandsReducer,
    currentBand: currentBandReducer,
})

export default rootReducers