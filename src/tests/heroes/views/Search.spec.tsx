import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Search } from "../../../heroes"

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('<Search />', () => {
    test('should render the component', () => {
        render( <MemoryRouter initialEntries={['/marvel']}>
            <Search />
        </MemoryRouter>)

        expect(screen.getByText('Search a hero')).toBeTruthy()
        expect(screen.getByText('Results')).toBeTruthy()
    })

    test('should render the batman results with the param value', () => {
        render( <MemoryRouter initialEntries={['/search?q=batman']}>
            <Search />
        </MemoryRouter>)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')
        expect(screen.getByText('Batman')).toBeTruthy()
        expect(screen.getByText('Bruce Wayne')).toBeTruthy()
    })

    test('should show an error if doent found hero', () => {
        render( <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Search />
        </MemoryRouter>)

        const alert = screen.getByLabelText('alert-danger')
        expect(alert).toBeDefined()
    })

    test('should call the navigate to the new screen', () => {
        const inputValue = 'superman'
        render( <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Search />
        </MemoryRouter>)

        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { name: 'searchName', value: inputValue } });

        const form = screen.getByRole('form', { name: "searchForm" });
        fireEvent.submit(form)

        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)

    })
})