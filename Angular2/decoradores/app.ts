
function consola( constructor:Function){
  console.log( constructor);
}

// Decoracion de clases
@consola
// NOta experimentalDecorators esta prioridad si no existe sale error hay que ejecutarlo
// de esta manera : tsc app --experimentalDecorators
class villano{
  constructor(public nombre:string){

  }
}
