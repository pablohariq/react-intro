const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 213123,
        lat: 14.2324323,
        lng: 33.2313
    }
}

const persona2 = persona; //asignacion de referencia
persona2.nombre = "Peter" //con esto modificamos el objeto en su posicion en memoria, porque asignamos la REFERENCIA a memoria

console.log(persona, persona2) //ambos se llaman Peter

//para clonar un objeto usamos el operador spread
const persona3 = {...persona}
persona3.nombre = "Spider"
console.log(persona, persona3)

