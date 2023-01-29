import { Action, State } from "../interfaces/types";
import { types } from "../types/Types";

export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload?.name
            };
        case types.logout:
            return {
                logged: false
            };
        default:
            return state;
    }
}