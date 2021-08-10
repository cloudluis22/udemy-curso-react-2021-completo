import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (evt => {
        setInputValue(evt.target.value);
    })

    const submitEvents = (evt => {
        evt.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(elems => [inputValue, ...elems]);
            setInputValue('');
        }
        else {
            alert('Inserta al menos tres carácteres para realizar una busqueda.');
        }

    })


    return (
        <form onSubmit={submitEvents}>
            <input
                type='text'
                value={inputValue}
                onChange={changeInputValue}
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;