import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { eventLogoutCleaning } from '../../actions/events';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch( startLogout() );
        dispatch( eventLogoutCleaning() );
    };


    return (
        <div className="navbar navbar-dark bg-dark mb-4">

            <span className="navbar-brand px-4"> { name } </span>

            <button className="btn btn-outline-danger mx-4 px-3" onClick={ handleLogout }>
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir </span>
            </button>

        </div>
    )
}