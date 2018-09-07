"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// se importa las clases dentro del archivo clase 
/*import { Xmen } from "./clases/xmen.class";
import { Villanos } from "./clases/villano.class";
*/
var index_1 = require("./clases/index");
var wolverine = new index_1.Xmen("Logan", "XMEN");
//import { Villanos } from "./clases/villano.class";
var lax = new index_1.Villanos("Lax luthor", "conquistar el Mundoooo");
//wolverine.imprimir();
wolverine.imprimir();
lax.imprimirPlan();
//lex_lutor 
