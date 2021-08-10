
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':

            return [...state, action.payload]

        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done } // Copia todos los valores anteriores del todo, y done es el valor opuesto al que tenía.
                    : todo // Si no coincide con el payload solo devuelve el todo igual.
            )

        default:
            return state;

    }

}