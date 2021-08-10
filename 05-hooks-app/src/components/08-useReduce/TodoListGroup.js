import React from 'react';
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';

export const TodoListGroup = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => {
                   return <TodoListItem  key={todo.id} todo={todo} index={i} handleToggle={handleToggle} handleDelete={handleDelete} />
                })
            }
        </ul>
    )
}

TodoListGroup.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}