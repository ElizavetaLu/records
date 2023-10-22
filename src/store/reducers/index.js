import { combineReducers } from "redux";
import bandsReducer from "./bandsReducer";


const rootReducers = combineReducers({
    bands: bandsReducer
})

export default rootReducers