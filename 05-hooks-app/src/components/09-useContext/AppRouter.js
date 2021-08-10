import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>

            <NavBar />

            <div>

                <Switch>

                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* Si no encuentra una ruta específica, redirige a la ruta por defecto. */}
                    <Redirect to='/' />

                </Switch>

            </div>

        </Router>
    )
}
