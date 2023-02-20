import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth"
import { AppRouter } from "../../router/AppRouter"

describe('<AppRouter />', () => {
    test('should show the Login components if we dont aunthenticated', () => {
        const context = {
            state: {
                logged: false,
            }
        } 
        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/']}>
                <AppRouter />
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Login')).toBeTruthy();
    })

    test('should show the Marvel components if we are aunthenticated', () => {
        const context = {
            state: {
                logged: true,
                name: 'Johny'
            }
        } 
        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/login']}>
                <AppRouter />
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Marvel')).toBeTruthy();
    })
})