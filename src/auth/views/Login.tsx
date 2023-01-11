import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();
  const onLogin = () => {
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
