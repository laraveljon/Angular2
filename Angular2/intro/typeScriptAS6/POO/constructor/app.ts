class Avenger{
   nombre:string="Tony";
   equipo:string = undefined;
   nombreReal:string =undefined;

   puedePelear:string =false;
   peleasGanadas:number =0;
   // se crea el constructpr
   // El contructor se puede utilizar en utilizar variables
   constructor(nombre:string,equipo:string,nombreReal:string){
     //console.log("Se ejecutae el constructor");
     // this hace referencia a la clase y a sus propiedades dentro de la clase
     this.nombre=nombre;
     this.equipo=equipo;
     this.nombreReal=nombreReal;
   }
}
let iroman:Avenger =new Avenger( "Iroman", "Iroman" , "Tony start");

console.log(iroman);
