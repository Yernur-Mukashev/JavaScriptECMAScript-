// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
const minArr = Math.min(...arr);
console.log(minArr);
//-------------------------------------------------------------------------------

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
	let count = 0;
	return {
		increment() {
			count += 1;
			return count;
		},
		decrement() {
			count -= 1;
			return count;
		},
	};
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
	if (root.classList.contains(className)) {
		return root;
	}
	for (let i = 0; i < root.children.length; i++) {
		const found = findElementByClass(root.children[i], className);
		if (found) {
			return found;
		}
	}
	return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "product__list");
console.log(targetElement);
//долго на мог сделать гуглил искал как делается))
// Что то через класс не смог найти его выводил "null" был класс "container"
// мучался долго а потом передел на id и все заработала