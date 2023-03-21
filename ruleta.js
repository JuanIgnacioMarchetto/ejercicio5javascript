// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
const selectedColor = colors[2];

// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
console.log(colors[0][0]);

// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
const randomNum = () => Math.floor(Math.random() * 99) + 1;

// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
const array = [];
for (let i = 1; i <= 10; i++) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  array.push(randomNum);
}
console.log(array);

// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
const arrayCopy = [...array];
console.log(arrayCopy);

// 8a. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio.
let masterString = '';
const concatenateStrings = (string) => {
  if (string === 'cancelar') {
    console.log(masterString);
    masterString = '';
    return;
  }
  if (masterString === '') {
    if (typeof string !== 'string' || string.length === 0) {
      console.log('Argument must be a non empty string');
      return;
    }
    if (typeof string === 'string') masterString = string;
  } else {
    if (typeof string !== 'string' || string.length === 0) {
      console.log('Argument must be a non empty string');
      return;
    }
    if (typeof string === 'string') {
      masterString = masterString + '-' + string;
    }
  }
};

// 8b. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.
let arrayOfStrings = [];
const saveStringsIntoArray = (string) => {
  if (string === 'cancelar') {
    arrayOfStrings.forEach((el) => console.log(el));
    arrayOfStrings = [];
    return;
  }
  if (typeof string !== 'string' || string.length === 0) {
    console.log('Argument must be a non empty string');
    return;
  }
  arrayOfStrings.push(string);
  arrayOfStrings.forEach((el) => console.log(el));
};

// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.

// 10. Generar la inversa del ejercicio anterior (de pesos a dólares).

// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.