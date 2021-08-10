import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../../hooks/useCounter';

describe('Pruebas sobre el custom hook de "useCounter". ', () => {

    test('Debe retornar los valores por defecto.', () => {

        const { result } = renderHook( () => useCounter() );

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('Debe de setear el counter en 100.', () => {

        const { result } = renderHook( () => useCounter(100) );

        expect(result.current.counter).toBe(100);

    });

    test('Debe de aumentar el contador en uno y tomar en cuenta el parámetro dado.', () => {

        const { result } = renderHook( () => useCounter(21) );
        const { increment } = result.current;

        // Simular ejecutar una función del hook.
        act( () => increment() );
        const { counter } = result.current;

        expect(counter).toBe(22);

    });

    test('Debe de disminuir el contador en uno y tomar en cuenta el parámetro dado.', () => {

        const { result } = renderHook( () => useCounter(21) );
        const { decrement } = result.current;

        act( () => decrement() );
        const { counter } = result.current;

        expect(counter).toBe(20);

    });

    test('Debe de resetear el contador al valor inicial después de haber simulado un decremento y después usar la función de reset.', () => {

        const { result } = renderHook( () => useCounter(21) );
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(21);

    });

});