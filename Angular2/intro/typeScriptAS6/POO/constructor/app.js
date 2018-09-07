var Avenger = (function () {
    // se crea el constructpr
    // El contructor se puede utilizar en utilizar variables
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Tony";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        //console.log("Se ejecutae el constructor");
        // this hace referencia a la clase y a sus propiedades dentro de la clase
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var iroman = new Avenger("Iroman", "Iroman", "Tony start");
console.log(iroman);
