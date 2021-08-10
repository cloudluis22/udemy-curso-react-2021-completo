
// Creando un arreglo.
const array = [1, 2, 3, 4];

// Creando una copia del primer arreglo con el spread operator y aparte agregar un elemento más.
const array2 = [...array, 5];

// Utilizando .map para crear una versión modificada del segundo arreglo.
const array3 = array2.map( function (num) {
    // Eleva los valores del arreglo al cuadrado.
    return Math.pow(num, 2);
})

console.log(array);
console.log(array2);
console.log(array3);