import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        
        {/* el path /* me permite navegar al componente e incluir las rutas establecidas en ese componete */}
        <Route path="/*" element={<HeroRoutes />} />
      </Routes>
    </>
  )
}
