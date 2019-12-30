import ACTIONS from '../actions';
import {
    MainState,
    Action,
} from '../../@types';

const initialState: MainState = {
    count: 0,
};

export default function main(state: MainState = initialState, action: Action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.INCREMENT_COUNT: {
            const {count} = state;

            return {
                ...state,
                count: count + 1,
            };
        }
        default: {
            return state;
        }
    }
}
