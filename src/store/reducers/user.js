export default function user(state = {}, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                current: action.payload
            }
            default:
            return state
    }
}