import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effect.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
      //  console.log('Hola');
    }, [] ); // Como no hay nada en el argumento de las dependencias, el useEffect se ejecuta cada que haya un cambio en todo el componente.

    useEffect(() => {
       // console.log('formstate cambió.');
    }, [formState]); // Este useEffect depende de el estado de formState, si algo cambia en el, se ejecuta este useEffect.

    useEffect(() => {
       // console.log('email cambió.');
    }, [email] ); // Este useEffect depende de el valor de email.

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value // Se usa propiedades computadas para obtener el nombre de la propiedad del formulario a cambiar. (name en este caso.)
        });
    }

    return (
        <>

            <h1>UseEffect Hook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            { (name === '12345') && <Message /> }

        </>
    )
}
