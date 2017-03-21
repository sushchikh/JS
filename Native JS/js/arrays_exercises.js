"use strict"

// forEach
var firstArray = [1,2,3,4,5,6,7,8,9, -1, -2, -3, -4];
var secondArray= [];
firstArray.forEach( function(element) {
	secondArray.push(element * element);
});
console.log(secondArray);


// map
firstArray = firstArray.map(function(elem) {
	return elem*elem;
});
console.log(firstArray);


// filter
var thirdArray = [1,2,3,4,5,6,7,9, -1, -2, -3, -4]
thirdArray = thirdArray.filter(function(elem) {
	return elem < 0;
	// return !(index % 2);
});
console.log(thirdArray);

// some
var fourthArray = []
for(var i = -5; i < 11; i++){
	fourthArray.push(i);
};

fourthArray = fourthArray.some(function(elem){ 
	return elem > 0; // вернет true, если хотябы один из элементов больше 0
});
console.log(fourthArray);

// every
fourthArray = fourthArray.every(function(elem){
	return elem > 0; // вернет true, если все элементы больше ноля (=> false)
});

