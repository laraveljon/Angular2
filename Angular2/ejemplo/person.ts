class Person{

	firstName :string;
	lastname : string;
	age      : number;

	constructor(firstName,lastName,age){
		this.firstName=firstName;
		this.lastname=lastName;
		this.age=age;
	}

	greet(){
		console.log("Hello, my names is " +this.firstName+" " +this.lastname);
	}
}

var jon = new Person("Jon","Alanis",32);
var karol = new Person("Karolina","Juarez",26);

jon.greet();
karol.greet();
