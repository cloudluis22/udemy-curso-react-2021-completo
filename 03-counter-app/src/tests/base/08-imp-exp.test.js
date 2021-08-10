import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes';


describe('Pruebas en el archivo "08-imp-exp.js".', () => {
    
    test('El método getHeroesById debe retornar un objeto con un superheroe al ingresarle un id válido. ', () => {
        
        const id = 2;

        // El método retorna un objeto que contenga el id especificado.
        const heroeFunct = getHeroeById(id);

        // Para hacer el test básicamente se rehace la función.
        const heroeTest = heroes.find((elem) => elem.id === id);

        // Se realiza la comparación entre los dos resultados, ambos deberían tener el mismo objeto.
        expect(heroeFunct).toEqual(heroeTest);
    
    })

    test('El método getHeroesById debe retornar "undefined" al introducir un id que NO es válido.', () => {
        
        const id = 10;
        
        const heroeFunct = getHeroeById(id);
        const heroeTest = heroes.find((elem) => elem.id === id);

        // Ya que no hay nigún superheroe con ese id, el resultado tiene que devolver undefined.
        expect(heroeFunct).toBe(undefined);

    })

    test('El método getHeroesByOwner debe retornar un array con todos los héroes de DC Comics.', () => {
        
        const owner = 'DC';
        const heroesFunct = getHeroesByOwner(owner);

        const heroesTest = heroes.filter((elem) => elem.owner === owner)

        expect(heroesFunct).toEqual(heroesTest);
    })

    test('El método getHeroesByOwner debe retornar un array con todos los héroes de Marvel.', () => {
        
        const owner = 'Marvel'
        const heroesFunct = getHeroesByOwner(owner);

        const heroesTest = heroes.filter((elem) => elem.owner === owner)

        // Como sabemos que en el arreglo de héroes solo hay dos de Marvel, solo comparamos la longitud del arreglo retornado.
        expect(heroesFunct.length).toBe(2);
    })

})