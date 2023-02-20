import { authReducer } from '../../../auth/context/authReducer';
import { types } from '../../../auth/types/Types';

const initialState = {
    logged: false
};

describe('auth reducer', () => { 
    const action = {
        type: 'none'
    }

    test('should get the return default state', () => {
        const state = authReducer(initialState, action);
        expect(state).toEqual(initialState)
    })

    test('should call login action and set user', () => {
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: 'Juan'
            }
        }

        const state = authReducer(initialState, action);
        expect(state.logged).toBeTruthy()
        expect(state.name).toEqual(action.payload.name)
    })

    test('should call logout action and delete user', () => {
        const action = {
            type: types.logout
        }

        const state = authReducer(initialState, action);
        expect(state.logged).toBeFalsy()
    })
})