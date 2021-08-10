import { todoReducer } from "../../../08-useReduce/todoReducer";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el reducer de "todoReducer".', () => {

    test('Debe de retornar el estado por defecto.', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });


    test('Debe de agregar un TODO.', () => {

        const newTodo = {
            id: 3,
            desc: 'Comprar un Ryzen 5 5600x',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    });


    test('Debe de eliminar un TODO.', () => {


        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

    });

    test('Debe de poder hacer toggle.', () => {


        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true);

    });

});