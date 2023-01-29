
import { useReducer } from 'react';
import { types } from '../types/Types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('auth') || '{}');    
    return {
        logged: !!user.name,
        name: user.name
    }
}

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = async(name: string = '') => {
        localStorage.setItem('auth', JSON.stringify({name}))
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
