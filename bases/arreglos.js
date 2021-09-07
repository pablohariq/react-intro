const arreglo = new Array(100) //inicializa con 100 posiciones vacias
arreglo.push(1)
console.log(arreglo)

let arreglo2 = [1, 2, 3, 4];
// arreglo2.push(5);
let arreglo3 = [...arreglo2, 5] //operador spread copia el contenido en este caso
const arreglo4 = arreglo3.map((e) => e*2) //ES6
const arreglotriples = arreglo3.map(function(elemento){ //ES5
    return elemento*3
})
// console.log(arreglo2, arreglo3, arreglo4);
console.log(arreglotriples)
