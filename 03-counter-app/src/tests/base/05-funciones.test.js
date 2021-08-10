import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Probando las funciones de el archivo "05-funciones.js"', () => {
    
    test('el método getUser debe retornar un objeto. ', () => {
        const getUserTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
    
        expect(user).toEqual(getUserTest);
    })

    test('El método getUsuarioActivo debe de retornar un objeto incluyendo el parámetro específicado.', () => {
        
        // Probando con el nombre "Benny".
        const getUsuarioActivoTest = {
            uid: 'ABC567',
            username: 'Benny'
        }


        const user = getUsuarioActivo('Benny');

        expect(user).toEqual(getUsuarioActivoTest);
    })
    

})
