"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
// Decoracion de clases
var villano = (function () {
    function villano(nombre) {
        this.nombre = nombre;
    }
    villano = __decorate([
        consola
        // NOta experimentalDecorators esta prioridad si no existe sale error hay que ejecutarlo
        // de esta manera : tsc app --experimentalDecorators
    ], villano);
    return villano;
}());
