import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';
import { ContextApp } from '../auth/interfaces/types';

type Props = {
    children: JSX.Element
}

export const PrivateRouter = ({ children }: Props): JSX.Element => {
    const { state } = useContext<ContextApp>(AuthContext);
    const {pathname, search} = useLocation();
    
    useEffect(() => {
        const lastPath = pathname + search;
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search])
    

    return (state.logged) 
        ? children
        : <Navigate to='/login'/>
}