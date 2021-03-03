import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import config from "./config"
import Auth from '../components/auth/auth';
import Planets from '../components/planets/planets';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>
                <ProtectedRoute path="/">
                    <Planets />
                </ProtectedRoute>
            </Switch>
        </Router>
    );
}

function ProtectedRoute(props) {
    const dispatch = useDispatch()

    const user = JSON.parse(sessionStorage.getItem(config.userKey))
    if (user) {
        dispatch({
            type: 'SET_USER', //@todo move to const
            payload: user
        })
    }

    if (!user) {
        return <Redirect to="/auth"/>
    }

    return <Route {...props} />
}
