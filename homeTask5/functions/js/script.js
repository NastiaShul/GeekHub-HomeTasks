//2 functions

// 2.1. isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
}

// 2.2 factorial - Returns a number that is the factorial of the given number.
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

// 2.3 fib - Returns the nth Fibonacci number.
function fib(num) {
	let a = 1, b = 1;

	if (num <= 0) return 0;
	for (let i = 3; i <= num; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}
//2.4 isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

//2.5 reverse - Reverses the given string (yes, using the built in reverse function is cheating)

function reverse(str) {
	let res = "",
		len = str.length;
	while (len--) {
		res += str[len];
	}
	return res;
}

// 2.6 indexOf - Implement the indexOf function for arrays.
function indexOfElement(arr, elem) {
	let index;
	if (!arr.includes(elem)) {
		index = -1;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == elem) {
			index = i;
		} 
	}
	return index;
}

//2.7 isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive)

function isPalindrome(str) {
	str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
	const lastIndex = str.length - 1;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[lastIndex - i]) {
			return false;
		}
	}
	return true;
}
//2.8 missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

function missing(arr) {
	let result = [];

	for (let i = 1; i <= Math.max.apply(null, arr); i++) {
		if (!arr.includes(i)) {
			result.push(i);
		}
	}
	return result.join("");
}

//2.9 isBalanced - Takes a string and returns true or false indicating whether its curly braces are 

function isBalanced(str) {
	let braket = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] == "{" || str[i] == "}") {
			braket.push(str[i]);
		}
	}

	let assort = 0;
	if (braket.length <= 1 || braket[0] == "}") {
		return false;
	} else {
		for (let i = 0; i < braket.length; i++) {
			if (braket[i] == "{") {
				assort++;
			} else {
				assort--;
			}
		}
		if (assort == 0) {
			return true;
		} else {
			return false;
		}
	}
}



//3 Matrix
function matrix(rows, cols, row, col) {
	let counter = 1,
		result = [];

	let showArr = function (row, col) {
		if (row < 0 || col < 0 || row >= rows || col >= cols) {
			return;
		}
		result.push([row, col]);
	};

	while (result.length < rows * cols) {
		for (let i = 0; i < counter; i++) {
			showArr(row, col++);
		}
		for (let i = 0; i < counter; i++) {
			showArr(row++, col);
		}
		counter++;

		for (let i = 0; i < counter; i++) {
			showArr(row, col--);
		}
		for (let i = 0; i < counter; i++) {
			showArr(row--, col);
		}
		counter++;
	}
	return result;
}
