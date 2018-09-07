// La interface te sirve para globalizar variables de cualquier tipo

interface Xmen{
  nombre: string,
  poder:string,
  momento:string,

}
interface Poema{
  texto:string
}
// Antreriomente: function enviarMision(nombre:string,poder:string){}

// Se realiza la funsion declarando un parametro con cualquier nombre y llamando la interface
function enviarMision(xmen:Xmen){
  // al impirmir el dato del parametro "xmen" se l asigna la propiedad nombre que proviene del la interface Xmen
  console.log("Enviando al : " + xmen.nombre);
  console.log("Su poder es : " + xmen.poder);
  console.log("Tiempo es : " + xmen.momento);
};
function enviarCuartel(xmen:Xmen){
  console.log("Enviando a cuartel : " +xmen.nombre);
  console.log("Que hace : " +xmen.poder);
}
function time(timpo:Xmen){
  console.log("El timpo ya paso desde " +timpo.momento);
}
function Poema(text:Poema){
  console.log("EL dia que quiso volar "+text.texto +"s ....");
}

let Wolverine:Xmen = {
  nombre:"PERRO",
  poder:"MOIRDIDA",
    momento:"Ayer"
}

let Wolverine2:Xmen = {
  nombre:"CASA",
  poder:"DORMIR"
}

let Tiempo:Xmen={
  momento:"Ayer"
}
let Texto:Poema{
  texto:"hubo que comerce un pajaro, y dicen que sigue vomitando huevo";
}
//console.log(Wolverine);
enviarMision(Wolverine);
enviarCuartel(Wolverine2);
time(Tiempo);
Poema(Texto);
