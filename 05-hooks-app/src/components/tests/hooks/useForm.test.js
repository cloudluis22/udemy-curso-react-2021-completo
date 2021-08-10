import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../../hooks/useForm';

describe('Pruebas en el custom hook de "useForm".', () => {

    const formInicial = {
        name: 'Juan Benjamin Vazquez Delgado',
        email: 'bennyuwo@hotmail.com'
    }

    test('Debe de regresar un formulario vacío y dos funciones por defecto.', () => {

        const { result } = renderHook( () => useForm() );
        const [ form, handleInputChange, reset ] = result.current;

        expect(form).toEqual({});
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de regresar un formulario por defecto si se le introduce uno como valor inicial.', () => {

        const { result } = renderHook( () => useForm(formInicial) );
        const [ form ] = result.current;

        expect(form.name).toBe('Juan Benjamin Vazquez Delgado');
        expect(form.email).toBe('bennyuwo@hotmail.com');

    });

    test('Debe de cambiar el valor de el nombre de el formulario simulando la acción.', () => {

        const { result } = renderHook( () => useForm(formInicial) );
        const [ , handleInputChange ] = result.current;

        const event = {

            target: {

                // Lo que sería el nombre del input en el formulario.
                name: 'name',
                // Y su valor dentro.
                value: 'Juana Benjamina Vazquez Delgada'

            }
        }

        // Simular cambio en el formulario.
        act( () => handleInputChange(event) );

        const [ form ] = result.current;

        expect(form.name).toBe('Juana Benjamina Vazquez Delgada');

    });

    test('Debe de cambiar a los valores por defecto si se utiliza la función de reset.', () => {

        const { result } = renderHook( () => useForm(formInicial) );
        const [ , handleInputChange, reset ] = result.current;

        const event = {

            target: {

                name: 'name',
                value: 'Juana Benjamina Vazquez Delgada'

            }
        }

        act( () => handleInputChange(event) );
        act( () => reset() );

        const [ form ] = result.current;

        expect(form.name).toBe('Juan Benjamin Vazquez Delgado');

    });

    test('Debe de cambiar a los valores por defecto si se utiliza la función de reset.', () => {

        const { result } = renderHook( () => useForm(formInicial) );
        const [ , handleInputChange, reset ] = result.current;

        const event = {

            target: {

                name: 'name',
                value: 'Juana Benjamina Vazquez Delgada'

            }
        }

        act( () => handleInputChange(event) );
        act( () => reset() );

        const [ form ] = result.current;

        expect(form.name).toBe('Juan Benjamin Vazquez Delgado');

    });

});