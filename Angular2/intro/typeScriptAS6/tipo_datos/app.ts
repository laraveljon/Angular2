
// EN los tipo de datos. Lo pormero se que setiene que saber es cambar  el var con let
// despues si queremos poner un dato y deoendiendo del dato es  escribir la variable
 // " : " y el tipo de dato ya se "sting" "number", "boolean":

 let nombre:string ="Jonathan";
 let numero:number =1234568789;
 let boolean:boolean =true;

 let hoy = new Date();
 // o tambien
 let hoy2 :Date=new Date();

hoy =new Date('2019-07-05');
hoy2 =new Date('2020-07-05');

//console.log(nombre);
console.log(hoy);

//La variable "any" puede recibir calquier variable que ya se haya asignado
//es decir toma variables  ya  asignados,  puedes recibir string, boolean, date,number.
  let cualquiera:any;
  cualquiera = nombre;
  /*cualquiera = numero;
  cualquiera = boolean;
  cualquiera=hoy2;*/
  console.log(cualquiera);



  let spiderman ={
    nombre: "HULK",
    edad :12
  }
   spiderman={
    nombre :"PITER PARKERT",
    edad: 18

  }

  console.log(spiderman);
