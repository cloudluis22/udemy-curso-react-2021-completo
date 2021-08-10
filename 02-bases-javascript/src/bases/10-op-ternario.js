
// Usando el operador ternario y versión aún más simplificada.

let isActive = true;

// Condición con operador ternario (if y else).
const mensaje = isActive ? 'Activo' : 'Inactivo';

// La versión simplificada solo realiza una acción si la condición es verdadera, si no, solo devuelve false. (solo if)
let mensaje2 = isActive && 'Activo';
console.log(mensaje2);