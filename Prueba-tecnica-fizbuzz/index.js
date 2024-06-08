//Escribe un porgrama que muestre los numeros del 1 al 100
//Sustituyendo los múltiplos de 3 por la palabra "fizz",
//los múltiplos de 5 por "buzz"
// y los múltiplos de ambos( de 3 y 5) por la palabra "fizzbuzz"

function fizzBuzz() {
  //Iterar del 1 al 100
  for (let i = 1; i <= 100; i++) {
    //Comprobar si el número es múltiplo de 3 y de 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    //Comprobar si el número es multiplo de 3
    else if (i % 3 === 0) {
      console.log("fizz");
      //Comprobar si el número es multiplo de 5
    } else if (i % 5 === 0) {
      console.log("buzz");
      // Pintar del 1 al 100
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
