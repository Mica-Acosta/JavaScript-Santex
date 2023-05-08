/* Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6 */

function piramide(num) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j;
      }
      console.log(row);
    }
  }

  piramide(6);

  piramide(3); 

  /* Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos */

function elementos(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    return result;
  }
  
  let array1 = ['rojo', 'azul', 'amarillo'];
  let array2 = ['blanco', 'negro', 'rojo'];
  
  let resultado1 = elementos(array1, array2);
  console.log(resultado1);
  
  let array3 = [4, 3, true, 'manzana'];
  let array4 = ['pera', 3, false, true, 3, true];
  
  let resultado2 = elementos(array3, array4);
  console.log(resultado2);


/* El tercer ejercicio no pude hacerlo.
Me cuesta horror comprender los enunciados y trasladarlos a codigo. */