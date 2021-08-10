import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer'
import { TodoListGroup } from './TodoListGroup'
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {

    let lc = null;

    if (typeof window !== 'undefined') {
        lc = localStorage.getItem('todos');
    }

    // Si hay objetos a parsear los devuelve, si no, solo retorna un arreglo vacío para el estado inicial.
    return JSON.parse(lc) || [];

}

export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }

    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoListGroup todos={todos} handleToggle={ handleToggle } handleDelete={ handleDelete } />
                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={ handleAddTodo }/>

                </div>

            </div>

        </div>
    )
}
