//2. Numbers

//a
console.log(Math.PI.toFixed(2));
//b
console.log((0.6 + 0.7).toFixed(1));
//c
console.log(parseInt("100$"));


//3. Strings
const str = "some test string";

//a
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str[0] + str[str.length - 1]);

//b
console.log(str[0].toLocaleUpperCase() + str.slice(1, str.length - 1) + str[str.length - 1].toLocaleUpperCase());

//c
let position = str.indexOf(' ', str.indexOf(' ') + 1);
console.log(position);

//d
const newStr = str.slice(0, str.length - 6);
console.log(newStr);


//4. Task

const entrances = 3,
	apartmentsPerEntrance = 20;

function showEntrance() {
	let apartment = parseInt(prompt("Hi, what's the apartment number?", 1));
	let entrance = Math.ceil(apartment / apartmentsPerEntrance);

	alert(`This is the entrance number ${entrance}.`);
}

showEntrance();


