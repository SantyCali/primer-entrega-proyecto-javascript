/* -------- Clase constructora ---------- */
class Informacion{
    constructor(calculo, nombre2, numero){
      this.edad = calculo;
      this.nombre = nombre2;
      this.numero = numero;
    }
  }
   




/*---- Use el filter para los precios de los boletos ----- */
const boletos = [
    {id: 1, nombre: "boleto 1", precio: 3000},
    {id: 2, nombre: "boleto 2", precio: 2500},
    {id: 3, nombre: "boleto 3", precio: 550},
    {id: 4, nombre: "boleto 4", precio: 400},
];

let nombre = parseInt(prompt("Ingresar precios minimos, Los precios son: $3000, $2500, $550, $400"));
let boletos2 = boletos.filter(item => item.precio > 1000);
console.log(`Precio ingresado: $${nombre}`);
console.log(boletos2);

/* -------------------------- */




  
/* ------- Array ------- */
  const array = ["Gracias", "precio boleto 0: $170"];
  
  
/* ------ Proceso ------- */
  for(let i = 0; i < 4; i++){  
   let edad = prompt("Ingrese su año de nacimiento");
   let nombre2 = prompt("Ingrese su nombre para el sorteo");
   let numero = prompt("Numeros disponibles: 23, 03, 45, 06, 84, 99.");

  /* Calculo edad */
   const añoResta = (a,b) => a - b;
    
    
   let año = 2022;
   
   let calculo = añoResta(año, edad);
/* ----------------------------- */


   alert(`Numero ${numero} ingresado, Nombre: ${nombre2}, Edad: ${calculo}`);
    let obj = new Informacion(calculo, nombre2, numero);
  
    array.push(obj);
    
   console.log(array);
/* ----- Fin del Proceso ------ */
  
  
  
  
/* ----- Elimino solo el "Gracias" con Splice ----- */
  const eliminar = (arr) => {
      let posicion = array.indexOf(arr);
    
      if(posicion != -1){
        array.splice(posicion, 1);
      }
    
    }
    
    eliminar("Gracias");

console.log(array);
/* ------ Uní este array2 al final -------- */

  const array2 = ["Mucha suerte para el sorteo!"];
  const union = array.concat(array2);
  console.log(union);
  
  }
  



  

  