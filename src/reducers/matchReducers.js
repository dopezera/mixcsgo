import { 
    MATCH_LIST_REQUEST,
    MATCH_LIST_SUCCESS,
    MATCH_LIST_FAIL,
} from "../constants/matchConstants"

export const matchListReducer = (state = { matches: [] }, action) => {
    switch(action.type) {
        case MATCH_LIST_REQUEST:
            return {loading: true};
        case MATCH_LIST_SUCCESS:
            return {loading: false, matches: action.payload}
        case MATCH_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}