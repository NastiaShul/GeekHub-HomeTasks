// 1. Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх

function multiple(...args) {
	let mult = 1;
	for (let arg of args) {
		mult *= +arg;
	}

	return mult;
}

//2. Створити фунцію reverseString яка приймає 1 аргумент будь-якого типу, і розвертає його. Наприклад: ‘test’ -> `tset`, undefined -> ‘denifednu’

function reverseString(argument) {
	let reverse;
	if (Array.isArray(argument)) {
		reverse = argument.reverse();
	}
	else if (typeof argument == "object") {
		reverse = Object.fromEntries(Object.entries(argument).reverse());
	}
	else {
		argument = "" + argument;
		reverse = argument.split("").reverse().join("");
	}

	return reverse;
}


//3. Створити фунцію вгадати число. Умови:
// a. Приймає число від 1-10. Перевірити що число не більше 10 і не менше 0, якщо не відповідає повернути помилку new Error(‘Please provide number in range 0 - 10’)
// b. Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
// c. Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, якщо не правильно ‘You are lose, your number is 8, the random number is 5’

function GuessTheNumber() {
	const randomNumber = Math.floor(Math.random() * 10) + 1,
		num = +prompt("Try to guess, what number am I thinking of?");

	if (num < 1 || num > 10) {
		alert("Please, provide number in range from 1 to 10.");
	} else if (!Number.isInteger(num)) {
		alert("Please, provide a valid number.");
	} else if (randomNumber === num) {
		alert("You Win!");
	} else {
		alert(`You are lose, your number is ${num}, the random number is ${randomNumber}.`);
	}

}

//GuessTheNumber();

//4. Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while. Приклади масивів:
// [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
// [-1,-8,-2]
// [1,7,3]
// [1,undefined,3,5,-3]
// [1,NaN,3,5,-3]

function sumArr(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}
	return sum;
}

function minArr(arr) {
	let len = arr.length,
		min = arr[len - 1];
	while (len--) {
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
};

function maxArr(arr) {
	var len = arr.length,
		max = arr[len - 1];
	while (len--) {
		if (arr[len] > max) {
			max = arr[len];
		}
	}
	return max;
};

//5. Дан перелік чисел, які являють собою показники висоти скал: [2,1,5,0,3,4,7,2,3,1,0]			
// (для прикладу дан цей масив, але може бути будь який. Ваш алгоритм має вирішувати будь які випадки)			
// Порахувати кількість води (кількість синіх клітинок), набраної в ями після дощу			
// Потрібно по можливості використовувати методи масивів а не звичайні цикли			
// Наприклад, в даному прикладі правильна відповідь: 10			

function trap(height) {
	let maxLeft = height[0],
		maxRight = height[height.length - 1];

	let left = 1,
		right = height.length - 1;

	total = 0;

	while (left <= right) {
		if (maxLeft <= maxRight) {
			maxLeft = Math.max(maxLeft, height[left]);
			total += maxLeft - height[left];

			left += 1;
		} else {
			maxRight = Math.max(maxRight, height[right]);
			total += maxRight - height[right];

			right -= 1;
		}
	}

	return total;
}

