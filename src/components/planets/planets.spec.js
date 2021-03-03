import { render, screen } from '@testing-library/react';
import Planets from './planets';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = {planets:[
            {
                "name": "Bespin",
                "rotation_period": "12",
                "orbital_period": "5110",
                "diameter": "118000",
                "climate": "temperate",
                "gravity": "1.5 (surface), 1 standard (Cloud City)",
                "terrain": "gas giant",
                "surface_water": "0",
                "population": "6000000",
                "residents": [
                    "http://swapi.dev/api/people/26/"
                ],
                "films": [
                    "http://swapi.dev/api/films/2/"
                ],
                "created": "2014-12-10T11:43:55.240000Z",
                "edited": "2014-12-20T20:58:18.427000Z",
                "url": "http://swapi.dev/api/planets/6/"
            },
            {
                "name": "Coruscant",
                "rotation_period": "24",
                "orbital_period": "368",
                "diameter": "12240",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "cityscape, mountains",
                "surface_water": "unknown",
                "population": "1000000000000",
                "residents": [
                    "http://swapi.dev/api/people/34/",
                    "http://swapi.dev/api/people/55/",
                    "http://swapi.dev/api/people/74/"
                ],
                "films": [
                    "http://swapi.dev/api/films/3/",
                    "http://swapi.dev/api/films/4/",
                    "http://swapi.dev/api/films/5/",
                    "http://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T11:54:13.921000Z",
                "edited": "2014-12-20T20:58:18.432000Z",
                "url": "http://swapi.dev/api/planets/9/"
            }
        ],
        user: {
            current: {
                name: "Luke"
            }
        },
        errors: {
            planetsError: null
        }
    };
    const mockStore = configureStore()
    let store

    it('renders auth page', () => {
        store = mockStore(initialState)
        const { getByText } = render(<Provider store={store}><Planets /></Provider>)

        expect(getByText('Bespin - 6000000')).not.toBeNull()
        expect(getByText('Coruscant - 1000000000000')).not.toBeNull()
    })
})
