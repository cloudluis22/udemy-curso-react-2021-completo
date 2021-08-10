import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator'
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (evt) => {
        evt.preventDefault();

        if ( isFormValid() ) {
            dispatch(startRegisterWithEmailPasswordName(email, password));
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch( setErrorAction('name is required') );
            return false;

        } else if (!validator.isEmail(email)) {
            dispatch( setErrorAction('email is not valid') );
            return false;

        } else if (password !== password2 || password.length < 6) {
            dispatch( setErrorAction('Password should be at least 6 characters and match with each other.') );
            return false;
        }

        dispatch( removeErrorAction() );

        return true;
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">

                {   msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

            <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={name} onChange={ handleInputChange } />
            <input type="text" placeholder="E-mail" name="email" className="auth__input" autoComplete="off" value={email} onChange={ handleInputChange } />
            <input type="password" placeholder="Password" name="password" className="auth__input" value={password} onChange={ handleInputChange } />
            <input type="password" placeholder="Confirm password" name="password2" className="auth__input" value={password2} onChange={ handleInputChange }/>
            <button type="submit" className="btn btn-primary btn-block mb-5"> Register </button>

            <Link to="/auth/login" className="link"> Already registered? </Link>

        </form>

    </>
    )
}

export default RegisterScreen;