// Обращение к свойствам объекта.
console.log(Samba3.model); // "Samba-1"
console.log(Samba3.isFull); // false

// Вызов методов объекта.
Samba3.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'

Samba3.isUVLampOn = true;
Samba3.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'

Samba3.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'
