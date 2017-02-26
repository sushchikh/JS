"use struct"

//инициализация объекта
var user = {
	//создание свойство "name" и записть в него значения "Вася"
	name: 'Вася',
	surname: 'Петров',
	//свойство из нескольких слов
	'another opbejc propertis': true,
	//свойство элемента может быть чем угодно, в т.ч. функцией
	LogIn: function(){
		c = a + b;
	},
};

//вывод всего объекта, с перечислением всех свойсвт 
console.log(user);

//добавляет еще одно совйство в объект
user.sex = 'самец';
console.log(user['sex']);

//вывод в консоль свойства "name" объекта "user" и свойства "suranme"
console.log(user.name + ' ' + user.surname);

//создание еще одного свойства только из нескольких слов через [] скобки
user['second name'] = 'Михайлович';
console.log(user['second name']);

//изменение значения свойства "name" объекта "user" на Петя
user.name = 'Петя';
console.log(user.name);

//проверка наличия в объекте свойства
if ('name' in user){
	console.log('Свойство name в обхекте есть');
};

//удаление свойства "name"
delete user.name;
console.log(user.name);//undefined

//перебор свойств объекта, свойства поочередно записываются в переменную propName, и передаются в тело цикла
for (var propName in user){
	console.log('Свойство: ' + propName + ' Значение: ' + user[propName]);
};

//подсчет количества свойств в объекте
var counter = 0;
for (var propName in user){
	counter++;
};
console.log('Количество свойст объекта user = ' + counter);
console.log('');console.log('');

//передача объекта по ссылке, изменяя свойство одного объекта мы меняем свойство второго, ибо дефакто объект вообще один,
//просто двум переменным дана на него ссылка.
//для создания полной копии независимого объекта его нужно копировать на уровене примитивов (в цикле копировать каждое свойство)
var obj_1 = {
	name: 'Вася',
	surname: 'Иванов',
	sex: 'male',
	age: 22
};
var obj_2;
obj_2 = obj_1;
console.log(obj_1);
console.log(obj_2);
obj_1['age'] = 23;
console.log(obj_2);




// exercise 1 /////////////////////////////////////////////////////////////////////////
// var counter = 0;
// function isEmpty(obj){
// 	for (var propName in obj){
// 	return false;
// 	};
// 	return true;
// };

// var emptyObj = {};
// console.log(isEmpty(emptyObj));
// emptyObj['name'] = 'atatata';
// console.log(isEmpty(emptyObj));


//exercise 2 /////////////////////////////////////////////////////////////////////////

// var salaries = {
// 	'Вася': 100,
// 	'Петя': 200,
// 	'Даша': 250
// };
// var summ = 0;
// for (var name in salaries){
// 	summ += salaries[name]
// };
// console.log(summ);


//exercise 3 ///////////////////////////////////////////////////////////////////////////


// var salaries = {
// 	"Вася": 300,
// 	"Петя": 400,
// 	"Даша": 2050
// };
// var maxValue = 0;
// maxName = '';
// for (var name in salaries){
// 	if (salaries[name] > maxValue){
// 		maxValue = salaries[name];
// 		maxName = name;
// 	};
// };
// console.log(maxName || 'таки похоже никто не работал');

//exersice 4 /////////////////////////////////////////////////////////////////////////////
// var menu = {
// 	width: 200,
// 	height: 400,
// 	title: 'My menu'
// };
// function double(menu){
// 	for (name in menu){
// 		if (!isNaN(parseFloat(menu[name]))){
// 			menu[name] = menu[name] * 2;
// 		};
// 	};	
// };
// double(menu);
// console.log(menu);