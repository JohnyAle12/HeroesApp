import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DC, Hero, Marvel, Search } from '../views'

export const HeroRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="dc" element={<DC />} />
                <Route path="marvel" element={<Marvel />} />
                <Route path="search" element={<Search />} />
                <Route path="hero" element={<Hero />} />
            </Routes>
        </div>
    </>
  )
}
