
const initialState = [{
    id: 1,
    todo: 'Comprar la RTX 3060 Ti a buen precio.',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'add') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar un R5 5600X',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);