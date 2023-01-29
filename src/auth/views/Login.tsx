import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    login && login('Johny Prieto')
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <button className='btn btn-success' onClick={onLogin}>
        Login
      </button>
    </>
  )
}
