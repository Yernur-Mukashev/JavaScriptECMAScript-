// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
	// Объявляем новые свойства и переопределить свойство model.
	model: "dancing series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	isUVLampOn: false,
	// Добавляем новый метод.
	switchUVLamp: function () {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of DancingSeries");
		this.isUVLampOn = !this.isUVLampOn;
		console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
	},
	// Делаем ссылку на прототип от родителя.
	__proto__: VacuumCleaner,
};


// Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта - это getPrototypeOf и setPrototypeOf. Эти методы не доступны в браузере Internet Explorer версии ниже 10.

