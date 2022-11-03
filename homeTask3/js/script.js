"use strict";

//2
// Створити функції
// - Перша функція приймає масив і колбек
// - Друга функція (колбек) обробляє кожен елемент масиву (для кожної функції свій колбек)

function validCallbackName(arr, callback) {
	return callback(arr)
}
function upperFirstLetter(arr) {
	return arr.reduce((prev, item) => prev += item.charAt(0).toUpperCase() + item.slice(1))
}

function multiplyTen(arr) {
	return arr.map(item => item * 10).join(", ");
}

function dataBase(arr) {
	return arr.map(item => item.name + " is " + item.age).join(", ");
}

function reverse(arr) {
	return arr.map(item => item.split("").reverse().join("")).join(", ");
}


//3 this
//3.1 Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
const rectangle = {
	width: this.width,
	height: this.height,
	getSquare: function (width, height) {
		return width * height
	},
}

//3.2 Створити об'єкт у якого буде ціна товара і два метода: для отримання ціни і для отримання ціни з урахуванням знижки
const price = {
	price: 10,
	discount: "15%",
	getPrice: function () {
		return this.price;
	},
	getPriceWithDiscount: function () {
		return this.price - (this.price / 100 * parseInt(this.discount));
	}
}
//3.3 Створити об'єкт 'чисельник' у якого є числове значення і методи 'подвоїти', 'додати один', 'відняти один' Методи можна викликати через крапку щоб був ланцюг виклику
const numerator = {
	value: 1,
	double() {
		return this.value * 2;
	},
	plusOne() {
		return this.value + 1;
	},
	minusOne() {
		return this.value - 1;
	},
}

//3.4. Змінити функції getElementHeight таким способом щоб можна було викликати getElementHeight і отримати 25
const element = {
	height: 25,
	getHeight: function () {
		return this.height;
	}
};

let getElementHeight = element;
getElementHeight.getHeight();;


//4
let convertToObject = num => {
	const obj = {
		value: num,
		isOdd: Boolean(num % 2),
	};
	return obj;
}


//5 Замикання 
//5.1 
function minus(x) {
	return function (y) {
		if (typeof x === "undefined") {
			x = 0;
		}
		if (typeof y === "undefined") {
			y = 0;
		}
		return x - y;
	}
}

//5.2 Створити функція яка множить і вміє запам'ятовувати результат між викликами

function multiplyMaker(y) {
	function multiply(x) {
		return y *= x;
	}
	return multiply;
}
const multiply = multiplyMaker(2);

//5.3 Створити модуль який може працювати з рядком і має методи

let createStr = function (str) {
	return {
		setStr: function (newStr) {
			str = newStr;
			if (typeof newStr === "number") {
				str = "" + newStr;
			}
			if (typeof newStr === "undefined") {
				str = "";
			}
		},

		getStr: function () {
			return str;
		},

		getStrLength: function () {
			return str.length;
		},

		getStrReverce: function () {
			return str.split("").reverse().join("");
		}
	}
}

//5.4 Створити модуль калькулятор, який може додавати, віднімати, множити, ділити, і приводити до ступеню(степени).(Значення повинне зберігатись в змінній не в this)

let calc = (() => {
	let num = 0;
	const a = {
		get() {
			console.log(num);
			return a;
		},
		set(x) {
			num = +x;
			return a;
		},
		add(x) {
			num += x;
			return a;
		},
		subtract(x) {
			num -= x;
			return a;
		},
		multiply(x) {
			num *= x;
			return a;
		},
		divise(x) {
			num /= x;
			return a;
		},
		pow(x) {
			Math.pow(num, x);
			return a;
		},
		modulus(x) {
			num % x;
			return a;
		}
	};

	return a;
})();

//6 Реалізувати функцію sum.

function sum(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		}
	}
}
