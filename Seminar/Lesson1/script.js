// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// function mergeArrays (arr1, arr2,) {
//     // arr1, arr2 параметры функции
//     return [...arr1, ...arr2];
// }
// const array = [1, 2, 3];
// const array2 = [4, 5, 6];
// // аргумент это то что передается внутрь функцию

// console.log(mergeArrays(array, array2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
//     return rest.filter((element, index) => rest.indexOf(element) === index);
//   }
//   console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

//   function removeDuplicates(...rest) {
//     return [...new Set(rest)];
//   }
//   console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); //можно так

//   [1, 2, 3, 2, 4, 1, 5].filter((el, idx, arr) => arr.indexOf(el) === idx);
//   console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5))

//--------------------------------------------

// Задание 2 (тайминг 25 минут)
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(array) {
	return array.filter((element) => element % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 2, 4, 8, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

/**
 *
 * @param {Array} array - это массив ))
 * @returns
 */
function calculateAverage(array) {
	return (
		array.reduce((accumulator, element) => accumulator + element, 0) /
		array.length
	);
} // accumulator - собирает/аккумулирует значения в одно число!

console.log(calculateAverage([1, 2, 3, 4, 5]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(str) {
	const str1 = str.split(" ");
	return str1
		.map((element) => element.charAt(0).toUpperCase() + element.slice(1))
		.join(" ");
}

console.log(
	capitalizeFirstLetter(
		"Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной"
	)
);

//----------------------------------------------------

// Задание 3 (тайминг 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
	function add(argument) {
		return (initialValue += argument);
	}
	function subtract(argument) {
		return (initialValue -= argument);
	}
	return { add, subtract };
}

const calc = createCalculator(45);
console.log(calc.add(32));
console.log(calc.subtract(32));

//-------------------------------------------------------------------

// Задание 4 (тайминг 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.

// // Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); // "Hello, John!"

function createGreeting(userName) {
	return () => `Hello, ${userName}`;
}
const greeting = createGreeting("John");

console.log(greeting());

//-------------------------------------------------------------------

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

// // Пример использования:

const isPasswordValid = createPasswordChecker(8);

function createPasswordChecker(minLengthPassword) {
	return (password) => password.length >= minLengthPassword;
}

console.log(isPasswordValid("password")); // true
console.log(isPasswordValid("secret")); // false

//-----------------------------------------------------------

// Задание 6 (тайминг 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:


function sumDigits(number) {
      if (number < 10) {
        return number;
    } else {
        return (number % 10) + sumDigits(Math.floor(number / 10));
    }
}

console.log(sumDigits(123));  // 6 (1 + 2 + 3)
console.log(sumDigits(456789));  // 39 (4 + 5 + 6 + 7 + 8 + 9)