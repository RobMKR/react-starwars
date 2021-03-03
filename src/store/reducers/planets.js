export default function user(state = [], action) {
    switch (action.type) {
        case 'SET_PLANETS':
            return [
                ...action.payload
            ];
        default:
            return state
    }
}