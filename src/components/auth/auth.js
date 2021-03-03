import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../store/actions/auth'
import Logo from "../Logo";

export default () => {
    const dispatch = useDispatch()
    const [ user, setUser ] = useState({})

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4">
                    <Logo width={100} />
                    <form onSubmit={(e) => { e.preventDefault(); dispatch(auth(user.username, user.password)) }} className="row">
                        <div className="form-group" style={{position: 'relative'}}>
                            <input placeholder=" " id="username" className="form-control" name="username"
                                   onChange={(e) => setUser({
                                    ...user,
                                    username: e.target.value,
                                })}/>
                            <div className="floater"></div>
                        </div>

                        <div className="form-group" style={{marginTop: '30px', position: 'relative'}}>
                            <input placeholder=" " id="password" type="password" className="form-control" name="password"
                                   onChange={(e) => setUser({
                                       ...user,
                                       password: e.target.value,
                                   })}/>
                            <div className="floater"></div>
                        </div>

                        <div style={{marginTop: '40px'}}>
                            <button type="submit" disabled={!user.username || !user.password}
                                    className="loginButton btn btn-lg col-md-6 col-md-offset-3 col-xs-12">Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}