// Работа с this
const checkThis = function () {
    console.log(this);
}

checkThis(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

////

const checkThisInObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};

checkThisInObject.checkThis() // {testProperty: true, checkThis: ƒ}

///////////
// this - это ключевое слово в языке JavaScript, которое позволяет обратиться к свойствам и методам объекта внутри его методов. А также ключевое слово this доступно в любой функции, и либо принимает значение объекта, который являлся контекстом при вызове функции, либо undefined.