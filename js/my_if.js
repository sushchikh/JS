// 					#### ########
// 					 ##  ##
// 					 ##  ##
// 					 ##  ######
// 					 ##  ##
// 					 ##  ##
// 					#### ##

// if (выражение) инструкция 
// если выражение в скобках истенно, то иснструкция будет выполнена
// if (выражение) {инструкция} else {statement};

// var x = 15
// if (x < 10) {
// 	console.log('x less then 10');
// }
// else {
// 	console.log('x more tehen 10');
// }


//для перебора нескольких значений юзается инструкция "switch"
// switch(statement) {
// case statement: do some;
// case statement: do somth. else;
// case statement: so forth;
// default statement: do defolt thing;    —     дефолтная инструкция выполнится, если предыдущие case не сработают
// }
// !important — если сработает верхнее case, то все нижние тоже выполняться
// чтобы избежать выполнения всех инструкций после верного case юзается команда "break;"

// var name = "John", homecity;

// switch(name) {
// 	case "John": homecity = "Boston"; break;
// 	case "Bill": homecity = "NY"; break;
// 	case "Monika": homecity = "Astana"; break;
// 	default: homecity = "Moscow";
// }
// console.log(name + " - " + homecity);




// x = parseInt(prompt('введите число',''));
// var text = (x > 10) ? 'x > 10' : (x < 10) ? 'x < 10' : (x === 10) ? 'x = 10' : 'вообще не число';
// console.log(text);


// операнд "," (запятая) бинарый — выражение, выражение — посчитает левый и правый и вернет правый
//var test = (15,20); // переменной тест будет присвоено 20

/*
do{ 
	var myString = prompt('Введите строку','');
} while(!myString);

console.log(myString);
*/

// var myNumber = 0, i = 0;
// while (i < 100){
// 	i++;
// 	myNumber++;
// 	if ((myNumber % 3 === 0) && (myNumber % 5 === 0)){
// 		console.log('FuzzBuzz');
// 	} else if ((myNumber % 5 === 0) && (myNumber % 3 != 0)){
// 		console.log('Buzz');
// 	} else if ((myNumber % 3 === 0) && (myNumber% 5 !=0)){
// 		console.log('Fuzz');
// 	}
// 	else {
// 		console.log(myNumber);
// 	};	
// };



var hesh = " #", i = 0, cell, width = 4;
while (i < 8){
	i++;
	if (i % 2 === 0){
	console.log(hesh, hesh, hesh, hesh);
	} 
	else {
		console.log(' ', hesh, hesh, hesh, hesh);
	}
}