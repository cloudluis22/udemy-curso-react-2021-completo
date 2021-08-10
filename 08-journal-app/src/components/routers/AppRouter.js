import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { firebase } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';

import AuthRouter from './AuthRouter';
import JournalScreen from '../journal/JournalScreen';
import { login } from '../../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../../actions/notes'

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(isLoggedIn);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch( startLoadingNotes(user.uid) );
            }
            else {
                setIsLoggedIn(false);
            }

            // Una vez se autentica ya no se está revisando si el usuario está siendo autenticado.
            setChecking(false)
        })

    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <div className="spinner round"></div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute isLoggedIn={ isLoggedIn } component={ AuthRouter } path="/auth" />
                    <PrivateRoute exact isLoggedIn={ isLoggedIn } path="/" component={ JournalScreen } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;