const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];

const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];


function encontrarElementosComunes1(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

const comunes1 = encontrarElementosComunes1(array1, array2);
console.log(`Los elementos comunes son: ${comunes1}`);

function encontrarElementosComunes2(array3, array4) {
    return array3.filter(element => array4.includes(element));
}

const comunes2 = encontrarElementosComunes2(array3, array4);
console.log(`Los elementos comunes son: ${comunes2}`);


