import Axios from "axios";
import config from '../config'

import { 
    MATCH_LIST_REQUEST,
    MATCH_LIST_SUCCESS,
    MATCH_LIST_FAIL,
} from "../constants/matchConstants"

export const listMatches = () => async (dispatch) => {
    dispatch({
        type: MATCH_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get(`${config.BACKEND_URL}/api/matches`);
        dispatch({
            type: MATCH_LIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: MATCH_LIST_FAIL,
            payload: error.message
        });
    }
}