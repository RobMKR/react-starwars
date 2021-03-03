import config from '../../config/config'
export function auth (username, password) {
    return (dispatch) => {
        fetch(`${config.apiUrl}people/?search=${username}`).then(resp => resp.json()).then(data => {
            const user = data.results[0];
            if (user?.birth_year === password) {
                sessionStorage.setItem(config.userKey, JSON.stringify(user))
                dispatch({
                    type: 'SET_USER',
                    payload: user
                })
                window.location.href = '/' // @todo find appropriate way
            }
        })
    }
}