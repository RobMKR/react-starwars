import { render, screen } from '@testing-library/react';
import Auth from './auth';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = {}
    const mockStore = configureStore()
    let store,wrapper

    it('renders auth page', () => {
        store = mockStore(initialState)
        const { getByText } = render(<Provider store={store}><Auth /></Provider>)

        expect(getByText('Login')).not.toBeNull()
    })
})
