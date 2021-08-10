
// Declarando una función tradicional.
const funcion1 = function (nombre) {
    return `Hola, ${nombre}`;
}

// Declarando una función más simplificada a través de funciones flecha/lambda.
const funcion2 = nombre => {
    return `Hola, ${nombre}`;
}

// Versión aún más simplificada en una sola línea.
const funcion3 = nombre => `Hola, ${nombre}`;

// Declarando con funciones lambda una función que solo retorne un objeto de manera simple.
const getPC = () => ({ // En este caso los paréntesis son necesarios ya que se retorna un objeto implícito.
    cpu: 'Ryzen 5 5600x',
    gpu: 'Nvidia RTX 3060 Ti'
});

// Otro ejemplo.
const getUser = name => ({
    id: 1234454634,
    user: name
})

// Declarando una variable que utilice la función y pasarle el parámetro requerido.
const user1 = getUser('Valeria');

// Comprobando el funcionamiento ejecutando en consola.
console.log(funcion1('Juan'));
console.log(funcion2('Pedro'));
console.log(funcion3('Martin'));
console.log(getPC());
console.log(user1);