import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth";
import { PrivateRouter } from "../../router/PrivateRouter";

describe('<PrivateRouter />', () => {
    test('should render children if we are authenticated', () => {
        const context = {
            state: {
                logged: true,
                name: 'Johny'
            }
        }

        Storage.prototype.setItem = jest.fn();

        render(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/login']}>
                <PrivateRouter>
                    <h1>Public</h1>
                </PrivateRouter>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Public')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/login');
    })
})