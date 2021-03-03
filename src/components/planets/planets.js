import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanets } from "../../store/actions/planets"
import Logo from "../Logo";
import {auth} from "../../store/actions/auth";

export default () => {
    const debouncedFetchPlanets = useCallback((val, currentUser) => {
        if (window.fetchTimeout) {
            window.clearTimeout(window.fetchTimeout)
        }
        window.fetchTimeout = setTimeout(() => {
            dispatch(fetchPlanets(val, currentUser))
        }, 300)

    });

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.current);
    const planets = useSelector(state => state.planets);
    const planetsError = useSelector(state => state.errors.planetsError);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Logo width={200} />
                    <div className="form-group" style={{position: 'relative'}}>
                        <input placeholder="Enter planet name" className="form-control" onChange={(e) => debouncedFetchPlanets(e.target.value, currentUser)}/>
                        <div className="floater"></div>
                    </div>

                    <div className="planets-block">
                        {planets.map((planet, i) => (
                            <div key={planet.name} style={{fontSize: `${7 * (10 - i/2)}px`}}>{planet.name} - {planet.population}</div>
                        ))}
                    </div>

                    {
                        planetsError && <div className="alert alert-danger">{planetsError}</div>
                    }
                </div>
            </div>
        </div>
    )
}