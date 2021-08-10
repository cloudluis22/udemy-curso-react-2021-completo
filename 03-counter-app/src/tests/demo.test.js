
describe('Preubas realizadas en el archivo "demo.test.js"', () => {
    
    test('Los strings deben de ser iguales', () => {
    
        // 1.- Inicialización.
        const string1 = 'Ryzen 5 5600x';
    
        // 2.- Estímulo (comparación)
        const string2 = 'Ryzen 5 5600x'
    
        // Observar el comportamiento utilizando la librería Jest.
        expect(string1).toBe(string2); // Se espera que el string1 sea igual al string2.
    
    })
    
})



