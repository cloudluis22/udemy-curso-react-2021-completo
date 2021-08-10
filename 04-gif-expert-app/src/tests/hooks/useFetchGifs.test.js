import useFetchGifs from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el custom hook de useFetchGifs', () => {

    test('Debe retornar el estado inicial del hook.', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('The Beatles'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar el arreglo de imagenes y loading debe ser false.', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('The Beatles'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});
