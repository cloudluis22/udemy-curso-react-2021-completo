
// Creando un objeto con propiedades.
const pc = {
    cpu: 'Ryzen 5 5950x',
    gpu: 'Nvidia RTX 3090',
    tienda: 'DDTech',
    precio: 60000
}

// Utilizar la desestructuración de objetos para crear variables individuales con la información del objeto.
const { cpu, gpu, tienda, precio } = pc;

// Object Destructuring en funciones.
const returnPC = ({ cpu, gpu, tienda, precio }) => {
    return {
        procesador: cpu,
        video: gpu,
        tiendaLocal: tienda,
        costo: precio,
        vendedor: { // Otro objeto dentro
            nombre: 'Miguel',
            edad: 25
        }
    }
}

// Usar la desestructuración en variables con la función
const { procesador, video, tiendaLocal, costo, vendedor: { nombre, edad } } = returnPC(pc); // El parámetro de la función es el objeto a desestructurar.
console.log(procesador, video, tiendaLocal, costo, nombre, edad);
