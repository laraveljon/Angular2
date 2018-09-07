"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villanos = (function () {
    function Villanos(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    //console.log(`Su plan es   ${this.plan}`);
    Villanos.prototype.imprimirPlan = function () {
        console.log(this.nombre + "," + this.plan);
    };
    return Villanos;
}());
exports.Villanos = Villanos;
