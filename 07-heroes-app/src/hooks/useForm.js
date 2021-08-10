import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (initialState) => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value // Se usa propiedades computadas para obtener el nombre de la propiedad del formulario a cambiar. (name en este caso.)
        });
    }

    return [values, handleInputChange, reset];

}