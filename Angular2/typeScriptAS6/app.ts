
// se importa las clases dentro del archivo clase 
/*import { Xmen } from "./clases/xmen.class";
import { Villanos } from "./clases/villano.class";
*/
import { Xmen,Villanos} from "./clases/index";

let wolverine = new Xmen("Logan","XMEN");

//import { Villanos } from "./clases/villano.class";

let lax   = new Villanos("Lax luthor","conquistar el Mundoooo");


//wolverine.imprimir();
wolverine.imprimir();
lax.imprimirPlan();

//lex_lutor