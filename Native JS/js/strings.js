"use strict"

//exersice 1

// var TitleName = prompt('введите заголовок','');
// function CheckTitleName(TitleName){
// 	TitleName = TitleName.toLowerCase();
// 	if ((TitleName.indexOf('xxx') == -1) && (TitleName.indexOf('porno') == -1)) {
// 		console.log('You are welcome!');
// 	} else {
// 		console.log('Go away bastard!');
// 	}
// }
// CheckTitleName(TitleName);



//exersixe 2

// var myString; 
// getMyString(myString);

// function getMyString(){
// 	myString = prompt('Введите строку с х и о','xxoxoox');
// 	if (myString === null){
// 	console.log('Ввод отменен');
// } else if (myString === ''){
// 	console.log('пустая строка, повторите ввод снова снова');
// 	getMyString(myString);
// } else {
// 	checkMyString(myString);
// };
// };

// function checkMyString(myString){

// 	myString = myString.toLowerCase();
// 	console.log(myString);
// 	var maxLength, oCounter = 0, xCounter= 0, otherSimbol = 0;
// 	maxLength = myString.length;
// 	while (maxLength > 0){
// 		if (myString.charAt(maxLength-1) === 'x'){
// 			maxLength--;
// 			xCounter++;
// 		} else if (myString.charAt(maxLength-1) === 'o') {
// 			oCounter++;
// 			maxLength--;
// 		} else {
// 			otherSimbol++;
// 			maxLength--;
// 		};
// 	};
// 	console.log('количество иксов равно ' + xCounter);
// 	console.log('количество ноликов равно ' + oCounter);
// 	console.log('количество иных символов равно ' + otherSimbol);
// };

//exersice 3

var money; 
getMoney(money);

function getMoney(money){
	money = prompt('Введите денюжку','$120.99');
	if (money === null){
	console.log('Ввод отменен');
} else if (money === ''){
	console.log('пустая строка, повторите ввод снова снова');
} else {
	money = parseFloat(money);
	console.log(money);
};
};


