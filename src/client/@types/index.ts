export interface MainState {
    count: number;
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

export interface IncrementCount {}
