
 let nombre:string ="Jonathan";
 let apellido ="Alanis";
 let edad =29;

 //en l forma tradicional de javaScript
 var texto = "Hola , " + nombre + " "+  apellido + "  " + (edad);
 console.log(texto);



 // NOTA para relizar el acento invertido es " ALTGR + }]`  " y resultado es :
 // ````

 //  Para realizar un template es poner el cento invertido ejemplo :

 let texto2 = `Nombre, ${ nombre }
               ${ apellido },
               ${ edad }`;

 console.log(texto2);


 function getNombre(){
   return "JON";
 }

 let textoconFunsion :string = `${ getNombre()}`
 console.log(textoconFunsion);


 let texto3 :string=`${ 1 + 9}`;

 console.log(texto3);
