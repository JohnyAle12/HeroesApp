import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext} from "../../auth"
import { PublicRouter } from "../../router/PublicRouter"

describe('<PublicRouter />', () => {
    test('should render children if we dont authenticated', () => {
        const context = {
            state: {
                logged: false
            }
        }

        render(<AuthContext.Provider value={context}>
            <PublicRouter>
                <h1>Public</h1>
            </PublicRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Public')).toBeTruthy();
    })

    test('should navigate if we are authenticated', () => {
        const context = {
            state: {
                logged: true,
                name: 'Johny'
            }
        }

        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/marvel" element={<h1>Private</h1>} />
                    <Route path="/login" element={
                        <PublicRouter>
                            <h1>Public</h1>
                        </PublicRouter>
                    } />
                </Routes> 
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Private')).toBeTruthy();
    })
})