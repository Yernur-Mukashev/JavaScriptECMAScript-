// Домашнее задание
// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
	constructor(name) {
		this.name = name;
	}
	displayInfo() {
		console.log(`Name: ${this.name}`);
	}
}

const employee = new Employee("John Smith");
employee.displayInfo();

class Manager extends Employee {
	constructor(name, department) {
		super(name);
		this.department = department;
	}
	displayInfo() {
		console.log(`Name: ${this.name}`);
		console.log(`Department: ${this.department}`);
	}
}

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Product {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
}

class Order {
	constructor(orderNumber) {
		this.orderNumber = orderNumber;
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	getTotalPrice() {
		return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
	}
}


const order = new Order(12345);

const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);

const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);

const product3 = new Product("Ice cream", 50, 3);
order.addProduct(product3);

console.log(order.getTotalPrice());

console.log(order);
