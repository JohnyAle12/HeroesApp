import { types } from "../types/Types";

type State = {
    logged: boolean,
    name?: string,
}

type Action = {
    type: string,
    payload: string
}

export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload
            };
        case types.logout:
            return {
                ...state,
                logged: false
            };
        default:
            return state;
    }
}