import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../../hooks/useFetch';

describe('Pruebas generales en el custom hook de useFetch.', () => {

    test('Debe de retornar la información por defecto al pasarle un parámetro valido.', () => {

        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    test('Debe obtener la información deseada y cambiar los valores.', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(typeof data).toBe('object');
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    test('Debe manejar un error correctamente.', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apidi/users?page=2') );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');

    });

});