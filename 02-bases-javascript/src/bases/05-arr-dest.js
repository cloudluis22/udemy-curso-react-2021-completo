
// Creando un arreglo simple.
const gpus = ['3060', '3060 Ti', '3070', '3070 Ti', '3080', '3080 Ti', '3090'];

// Obteniendo un valor específico del arreglo a través de la desestructuración.
const [, , gpu3070] = gpus; // Obteniendo el valor de la RTX 3070.
console.log(gpu3070)

// Desestructuración con funciones.
const returnCPUS = function() {
    return ['Ryzen 5 5600x', 'Ryzen 7 5800x', 'Ryzen 9 5900x', 'Ryzen 9 5950x'];
}

// Desestructurando todos los valores que retorna la función.
const [cpu1, cpu2, cpu3, cpu4] = returnCPUS();
console.log(cpu1, cpu2, cpu3, cpu4);

// Usar la desestructuración en un arreglo que contiene una función y usarla.
const accion = function(valor) {
    return [valor, () => { console.log('Hola que hacen panas.') }];
}

const [ nombre, sendMessage ] = accion('Manuel');
console.log(nombre);
sendMessage();