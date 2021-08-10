import '@testing-library/jest-dom'
import { getSaludo } from '../../base-pruebas/02-template-string'

describe('Pruebas en el archivo "02-template-string.js"', () => {
    
    test('Probando el método de getSaludo, este debe retornar el mensaje y el nombre colocado en el argumento. ', () => {
        
        const nombre = 'José Luis';
        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre);

    })
    
    // Si a la función no se le pasa ningún parámetro, debe funcionar con el valor por defecto.
    test('Probando la función pero sin el argumento, utilizando entonces el valor por defecto. ', () => {
        
        const saludo = getSaludo(); // No hay argumentos.

        expect(saludo).toBe('Hola Benny');
    })

})
