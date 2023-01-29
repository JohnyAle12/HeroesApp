import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroRoutes } from '../heroes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
          <PublicRouter>
            <Login />
          </PublicRouter>
        } />

        {/* el path /* me permite navegar al componente e incluir las rutas establecidas en ese componete */}
        <Route path="/*" element={
          <PrivateRouter>
            <HeroRoutes />
          </PrivateRouter>
        } />
      </Routes>
    </>
  )
}
