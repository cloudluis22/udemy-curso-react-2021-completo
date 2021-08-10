import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Probando la desestructuración de arreglos en el archivo "07-deses-arr.js".', () => {
     
    test('El método retornaArreglo debe retornar un array con un string y después un número.', () => {

        const [letras, numeros] = retornaArreglo();
        
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

    })
    
})
