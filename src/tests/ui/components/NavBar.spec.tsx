import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../auth"
import { ContextApp } from "../../../auth/interfaces/types"
import { Navbar } from "../../../ui"

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('<NavBar />', () => {
    const context: ContextApp = {
        state: {
            logged: true,
            name: 'Johny'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('should show the name user logged', () => {
        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/marvel']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Johny')).toBeTruthy()
    })

    test('should call the logout and navigate when we do logout', () => {
        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/marvel']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>)

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(context.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    })
})