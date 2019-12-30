import ACTIONS from "../actions";
import {
    ActionCreator,
    IncrementCount
} from '../../@types';

export const incrementCount: ActionCreator<IncrementCount> = () => {
    return {
        type: ACTIONS.INCREMENT_COUNT,
        payload: {}
    };
};
