import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes'

describe('Pruebas con las promesas de el archivo "09-promesas.js".', () => {
    
    test('El método getHeroeByIdAsync debe retornar el héroe con el id especificado de manera correcta y asíncrona.', () => {

        const id = 1;

        // Como es una función asíncrona, debe de colocarse el return para que Jest espere a que se complete la promesa.
       return getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual(heroes[0]);

            });
        
    });

    test('El método getHeroeByIdAsync debe retornar un error que dice "No se pudo encontrar el héroe".', () => {

        const id = 10;

        return getHeroeByIdAsync(id)
            .catch( error => {

                expect(error).toBe('No se pudo encontrar el héroe');

            });
        
    });
    
})