// JavaScript про ECMAScript (лекции), Урок 2. Основы ООП (объектно-ориентированного программирования)

// Объект робот-пылесос,
const Roomba = { // Есть негласное правило называть объекты в алгоритмах с большой буквы.
    // Обычно сначало объявляют свойства объекта.
    model: 'Rombo-1',
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,

    // После свойств объявляют его методы.
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

