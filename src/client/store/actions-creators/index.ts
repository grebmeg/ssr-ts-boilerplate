import ACTIONS from "../actions";
import {ActionCreator, RemoveItem} from '../../@types';

export const removeItem: ActionCreator<RemoveItem> = ({id}) => {
    return {
        type: ACTIONS.REMOVE_ITEM,
        payload: {
            id
        }
    };
};
