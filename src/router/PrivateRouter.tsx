import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';
import { ContextApp } from '../auth/interfaces/types';

type Props = {
    children: JSX.Element
}

export const PrivateRouter = ({ children }: Props): JSX.Element => {
    const { state } = useContext<ContextApp>(AuthContext);
    return (state.logged) 
        ? children
        : <Navigate to='/login'/>
}