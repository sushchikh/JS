"use strict"

//объект Date
var now = new Date();
console.log(now);

//методы полуения значений из даты 
console.log(now.getFullYear());//-> 2017
console.log(now.getMonth());//->02 (нумерация начинается с 0 и до 11)
console.log(now.getDay()); // возвращает день недели (неделя начинается с воскресения и это 0, суббота -6 )
console.log(now.getHours());// возвращает часы
console.log(now.getMinutes());// возвращает минуты
console.log(now.getSeconds());// возвращает секунды
//Все методы, указанные выше, возвращают результат для местной временной зоны.
console.log();
//вывод даты без локализации
console.log( now.toString() );
console.log( now.toDateString() );
console.log( now.toTimeString() );

console.log('ЗАДАЧКИ');

//exrecises 

// вывести заданную дату 20 февраля 2012 года, 3 часа 12 минут.
// var date = new Date(2012, 1, 20, 15, 12, 0, 0);
// console.log(date);

//вернуть день недели
var date = new Date(2012, 0, 3);
console.log(getDayName(date));

function getDayName(date){
	var day = date.getDay();
	switch (day) {
		case 0: day = 'sunday'; break;
		case 1: day = 'monday'; break;
		case 2: day = 'вторник'; break;
		case 3: day = 'среда'; break;
		case 4: day = 'четврег'; break;
		case 5: day = 'пятница'; break;
		case 6: day = 'суббота'; break;
	};
	return day;
};


