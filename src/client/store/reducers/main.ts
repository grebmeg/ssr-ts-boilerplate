import ACTIONS from '../actions';
import {
    MainState,
    Action,
} from '../../@types';

const initialState: MainState = {
    title: 'Title',
};

export default function main(state: MainState = initialState, action: Action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.REMOVE_ITEM: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}
