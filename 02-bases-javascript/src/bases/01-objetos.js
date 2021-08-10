
// Creando un object literal.
const pc = {
    cpu: 'Ryzen 5600x',
    gpu: 'RTX 3060 Ti',
    precio: 25000,
    tienda: {
        pais: 'Mexico',
        estado: 'Jalisco',
        ciudad: 'Guadalajara',
        nombre: 'DDTech'
    }
};

// Creando un nuevo objeto con las mismas propiedades utilizando el spread operator.
const pc2 = { ...pc };

// Cambiando valores.
pc2.cpu = 'Ryzen 5800x';
pc2.gpu = 'RTX 3080 Ti';
pc2.precio = 38000;

// Imprimiendo en consola ambos objetos.
console.log(pc);
console.log(pc2);