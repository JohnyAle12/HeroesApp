import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/views/Login'
import { DC } from '../heroes/views/DC'
import { Marvel } from '../heroes/views/Marvel'

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="dc" element={<DC />} />
          <Route path="marvel" element={<Marvel />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </>
  )
}
