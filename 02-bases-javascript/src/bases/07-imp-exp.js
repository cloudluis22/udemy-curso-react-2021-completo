import heroes, { owners } from '../data/heroes' // Usando import.

// Usando el método .find de los arreglos para obtener el heroe en base al ID.
const getHeroById = (id) => heroes.find((element) => element.id === id);
// console.log(getHeroById(2));

// Usando el método .filter para filtrar todos los heroes que pertenecen a Marvel.
const getHeroByOwner = (owner) => {
    return heroes.filter((element) => element.owner === owner );
}
// console.log(getHeroByOwner('Marvel'));

// console.log(owners);

export {
    getHeroById,
    getHeroByOwner
}