import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { DC, Marvel } from '../heroes'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="dc" element={<DC />} />
          <Route path="marvel" element={<Marvel />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </>
  )
}
