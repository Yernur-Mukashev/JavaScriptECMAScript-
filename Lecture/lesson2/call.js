
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Вызов методов объекта.
// Вызов метода объекта через call с явной передачей объекта робота-пылесоса в качестве контекста.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: 1 times.
// Тут этот пример не очень показателен, т.к. Мы и так имели доступ к объекту, а внутри setTimeout использовать call возможно только обернув все это в анонимную функцию, но тоже бессмысленно, потому что тогда мы снова имеем доступ к объекту, как видели в прошлом примере. Но мы можем передать в call другой объект и увидеть что функция вызывается в контексте другого объекта:

// Создадим фиктивный объект робота, который содержит только одно свойство, необходимое для работы функции и сразу же зададим ему первоначальное значение, отличное от того, которое задано у робота, для наглядности.
const notARobot = {
	counterOfStarts: 10,
};

Roomba.startCleaning.call(notARobot); // I am cleaning... I have been started: 11 times.

/////
// Подобно методу call можно использовать метод apply, который также позволяет вызвать функцию и передать необходимый контекст, единственным отличием от call, метод apply принимает аргументы, которые необходимо передать в вызываемую функцию не списком через запятую, а в виде массива, что порой удобнее.

// Объект Roomba - робот-пылесос. Код самого объекта смотри в первом листинге.
const notARobot2 = {
counterOfStarts: 10,
};

// Пример использования метода apply, для вызова функции с передачей в качестве контекста объекта notARobot и передачей в неё аргументов arg1, arg2, arg3.
// Roomba.startCleaning.apply(notARobot2, [arg1, arg2, arg3]); // I am cleaning... I have been started: 11 times.


/////////

// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Вызов методов объекта.
// В setTimeout мы передаем не просто наш метод, а функцию, которая привязана к нашему объекту. Метод bind возвращает новую функцию, с уже привязанным контекстом, именно она вызывается по истечении времени.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);

// I am cleaning... I have been started: 1 times.
// UV lamp is not working.
// I am going to charge...
