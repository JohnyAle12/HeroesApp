
import { useReducer } from 'react';
import { types } from '../types/Types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = {
    logged: false
}
export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async(name: string = '') => {
        dispatch({
            type: types.login,
            payload: {
                id: 1,
                name
            }
        })
    }

    return (
        <AuthContext.Provider value={{ state, login }}>
            {children}
        </AuthContext.Provider>
    )
}
