import config from '../../config/config';
import { getTs } from '../../helpers/date';

export function fetchPlanets (query, currentUser) {
    const shouldLimitRequests = !config.allowedUsers.includes(currentUser.name);

    if (shouldLimitRequests) {
        let userReqData = JSON.parse(localStorage.getItem(config.rateLimitKey) || null);

        if (!userReqData) {
            userReqData = {
                count: 1,
                ts: getTs(),
                user: currentUser.name
            };

            localStorage.setItem(config.rateLimitKey, JSON.stringify(userReqData));
        }

        const currentTs = getTs();

        if (currentTs - userReqData.ts > config.rateLimitDelay) {
            userReqData = {
                count: 1,
                ts: getTs(),
                user: currentUser.name
            };

            localStorage.setItem(config.rateLimitKey, JSON.stringify(userReqData));
        } else if (userReqData.count < config.rateLimitCount) {
            userReqData.count++;
            localStorage.setItem(config.rateLimitKey, JSON.stringify(userReqData));
        } else {
            const errMessage = 'Limit exceeded';

            return (dispatch) => {
                dispatch({
                    type: 'SET_PLANETS_ERR',
                    payload: errMessage
                });
            }
        }
    }

    return (dispatch) => {
        fetch(`${config.apiUrl}planets/?search=${query}`).then(resp => resp.json()).then(data => {
            const planets = data.results;

            if (planets.length) {
                planets.sort(
                    ( a, b ) => {
                        const popA = parseInt(a.population);
                        const popB = parseInt(b.population);

                        if (isNaN(popB)) {
                            return -1;
                        }

                        if ( popB < popA ){
                            return -1;
                        }
                        if ( popB > popA ){
                            return 1;
                        }
                        return 0;
                    }
                )
            }

            dispatch({
                type: 'SET_PLANETS',
                payload: data.results
            });

            dispatch({
                type: 'SET_PLANETS_ERR_CLEAR'
            });
        })
    }
}