// es forma asincrona
// donde  se encuentra resolve =cuando recibe el dato
// y en redject = cuando recibe errores
var prom1 = new Promise(function (resolve, redject) {
    //setTimeout( ()=>{},1500)
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina bien
        //resolve();
        //termina mal
        redject();
    }, 1500);
});
console.log("paso 1");
prom1.then(function () {
    // es el parametro que "resolve" es dedir que viene bien el parametro resolve
    console.log("Ejecutame cuando se termine bien !");
}, function () {
    // es el parametro que "resolve" es dedir que viene bien el parametro redject
    console.log("Ejecutar si todo sale mal");
});
console.log("Paso 2");
