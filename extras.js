// desafio Extra

let numeros = [18,9,21,29,1,86,799,65,2,7];

let [firstNumber,,secondNumber,,thirdNumber, ...restoOfNumbers] = numeros;

let cachorito = {
    nombre: "Kody",
    tipoDeMascota: "Perro",
    color: "Marmolado entre negro y marron",
    raza: "Mestizo"
}

let {nombre,tipoDeMascota,color,raza} = cachorito;
let presentacion = `Hola les presento a mi mascota su nombre es `+ nombre +`, es un hermoso `+ tipoDeMascota +`, de color: `+ color +` y su raza es: `+ raza;

console.log(cachorito);
console.log(presentacion);