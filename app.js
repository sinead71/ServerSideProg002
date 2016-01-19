console.log ("Hello World");

function add(a, b){
	return a+b;
}

var theAns = add(5, 7);
console.log(theAns);

//declaring variables
var name = "Sinead";//float
var age = 21; //int
var female = true; //boolean

if (age == 21){

	console.log("you're still young");
}

var o = new Object(); //similar to action script

var myArray = new Array();

var anotherObject = {};

var person = {};
person.name = "sinead";
person.age = 21;
person.female = true;
person.growOld = function (){
	this.age++;
}

var anotherperson = {

	name: "Sinead",
	age: 21,
	female: true,
	growOld: function (){
		this.age++;
	},
	friends: new Array(),
	newFriends: ["tom", "pat"]
}

for( var i = 0; i < 10; i++){
	console.log(anotherperson.name + " is " + anotherperson.age);
	anotherperson.growOld();
}


