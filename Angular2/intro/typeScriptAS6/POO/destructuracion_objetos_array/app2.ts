//Destructuracion de los arreglos

let avengers:string[] = ['jon','tony','pither parket'];

let [Hulk, iroman,spiderman] =avengers;

console.log(Hulk,iroman,spiderman);

// para seleccionar cualquier dato seri aponiendo datos vacios y solo el coma

let carros : string[] = ['datsun', 'caribe', 'bocho'];
let [,,maria] = carros;
console.log(maria);


let carros2 : string[] = ['datsun', 'caribe', 'bocho'];
let [,Antonio_Alanis,] = carros2;
console.log(Antonio_Alanis);


let carros3 : string[] = ['datsun', 'caribe', 'bocho'];
let [Jonathan,,] = carros3;
console.log(Jonathan);



let numeros :number[] =[123, 4890,912];
let [primero,segundo,tercero] =numeros;
console.log(primero,``,tercero);
