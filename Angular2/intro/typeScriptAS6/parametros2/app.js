/*
 * Parametros obligatorios opcionalesbligatorios
*/
// PARAMETRO obligatorios
function activar(quien) {
    var mensaje;
    mensaje = quien + " activo la bomba";
    console.log(mensaje);
}
activar("JON");
function evento(nombre, apellidoP, apellidoM) {
    var mensaje;
    mensaje = "El nombre es :  " + nombre + " " + apellidoP + " " + apellidoM + " ";
    console.log(mensaje);
}
evento("Jonathan ", "Alanis ", "Rojas ");
//////////////////////////////////////////////////////////////////////////////
// UN parametro con defecto es  enviar o no un parametro pero si no lo enviamos
// tene un valor dentro de la misma
function activar2(quien, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    mensaje = quien + " activo la bomba la " + objeto;
    console.log(mensaje);
}
activar2("JON");
function evento2(sujeto, numero, objeto, objeto2) {
    if (numero === void 0) { numero = 2; }
    if (objeto === void 0) { objeto = "Gerra"; }
    if (objeto2 === void 0) { objeto2 = "Mudial"; }
    var mensaje;
    mensaje = "El tal " + sujeto + " creo la " + numero + " " + objeto + " " + objeto2;
    console.log(mensaje);
}
evento2("Hitler");
// POr otro laddo para signar unparametro opcional es importatnte cuando llamemos
// la funsion se realice al orden losparametros que se esten asignando.
// NOTA : cuando se le asigna " ? " es poner un parametro opcional
//no se pudde poner un valor obligatorio al final por lo que se recomueda
// asignar el simbolo ?
function activar3(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "bomba"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " mando la  " + objeto + " por la " + momento;
    }
    else {
        mensaje = quien + " mando la " + objeto + " ";
    }
    console.log(mensaje);
}
activar3("JON", "BOMBA !!!", "tarde");
function evento4(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "bomba"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " mando la  " + objeto + " por la " + momento;
    }
    else {
        mensaje = quien + " mando la " + objeto + " ";
    }
    console.log(mensaje);
}
evento4("JUAN", "lanza", "tarde");
/// cuando solo se asigna por opcional el valor quien? y en la funsion le quito
// el parametro activar4("BOMBA !!!","tarde");
function activar4(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "bomba"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " mando la  " + objeto + " por la " + momento;
    }
    else {
        mensaje = quien + " mando la " + objeto + " ";
    }
    console.log(mensaje);
}
activar4("BOMBAZOOO !!!", "tarde");
/// cuando solo se asigna por opcional el valor quien? y en la funsion le quito
// el parametro activar4("BOMBA !!!","tarde"); y que tambien le quito momento
// al parametro porque es opcional
function activar5(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "bomba"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " mando la  " + objeto + " por la " + momento;
    }
    else {
        mensaje = quien + " mando la " + objeto + " ";
    }
    console.log(mensaje);
}
activar5("BOMBA !!!");
