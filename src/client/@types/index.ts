export interface MainState {
    title: string;
}

export interface State {
    main: MainState;
}

export interface Action {
    type: string;
    payload: {};
}

interface ActionCreatorResult<T> {
    type: string;
    payload: T;
}

export interface ActionCreator<T> {
    (arg: T): ActionCreatorResult<T>;
}

export interface RemoveItem {
    id: string;
}
