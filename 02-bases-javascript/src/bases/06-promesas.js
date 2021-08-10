import { getHeroById, getHeroByOwner } from './07-imp-exp'

// Función que lleva consigo una promesa.
const getHeroByIdAsync = (id) => {

    // La función retonar la promesa.
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const heroe = getHeroById(id);

            // Si se encontro al heroe con el id indicado la promesa se cumple.
            if (heroe) {
                resolve(heroe); // Al resolve se le pasa como parámetro el heroe encontrado.
            }
            else {
                // Si no se encuentra, la promesa es rechazada.
                reject('No se pudo encontrar al heroe'); // Al no encontrar al heroe solo se retorna un mensaje de error.
            }

        }, 2000);

    });

}

getHeroByIdAsync(3)
    // Si la promesa se cumple se usa el .then
    .then(console.log) // Técnicamente esto es una función pero se le puede pasar implícitamente el parámetro de el resolve.
    // Si no, se usa el catch.
    .catch( console.warn )
    