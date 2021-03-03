export default function errors(state = [], action) {
    switch (action.type) {
        case 'SET_PLANETS_ERR':
            return {
                ...state,
                planetsError: action.payload
            };
        case 'SET_PLANETS_ERR_CLEAR':
            delete state.planetsError;

            return {
                ...state
            };
        default:
            return state
    }
}