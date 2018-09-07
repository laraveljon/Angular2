"use strict";
var nombre = "Jonathan";
var apellido = "Alanis";
var edad = 29;
//en l forma tradicional de javaScript
var texto = "Hola , " + nombre + " " + apellido + "  " + (edad);
console.log(texto);
// NOTA para relizar el acento invertido es " ALTGR + }]`  " y resultado es :
// ````
//  Para realizar un template es poner el cento invertido ejemplo :
var texto2 = "Nombre, " + nombre + "\n               " + apellido + ",\n               " + edad;
console.log(texto2);
function getNombre() {
    return "JON";
}
var textoconFunsion = "" + getNombre();
console.log(textoconFunsion);
var texto3 = "" + (1 + 9);
console.log(texto3);
