const nombre = "pablo";
const apellido = "lizama";

const nombrecompleto = `${nombre} ${apellido} ${1+1}`
console.log(nombrecompleto)

const getSaludo = (nombre) => {
    return 'Hola' + ' ' + nombre
}

console.log(`texto: ${getSaludo(nombrecompleto)}`)