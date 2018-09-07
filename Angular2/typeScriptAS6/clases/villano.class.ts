export class Villanos{
	nombre : string;
	plan   : string;

	constructor(nombre:string, plan:string){

		this.nombre = nombre;
		this.plan = plan;
	}

	//console.log(`Su plan es   ${this.plan}`);
	imprimirPlan(){
		console.log(`${this.nombre},${this.plan}`);
	}
}