let avenger={
   nombre:"Jon",
   clave:"Hulk",
   poder:"droga"
}
// variables independientes

/*

let nombre =avenger.nombre;
let clave =avenger.clave;
let poder =avenger.poder;
*/
//   Hacerlo en una sola de codigo seria asi

let {nombre,clave,poder}=avenger;
console.log(nombre,clave,poder);
