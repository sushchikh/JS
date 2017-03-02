//дочерние элементы - непосредственые вложения в родительский элемент
//потомки - элементы которые лежат внутри данного с их детьми и их детьми и т.к.


//DOM
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(location);
console.log(location.href);
//location.assign('http:\\www.ya.ru');

//элементы DOMa и доступ к ним (точки входа)

//HTML
document.documentElement.style.fontFamily = "arial";//изменит стиль HTMLa

//body
document.body.style.backgroundColor = "#eee";// изменит стиль doby
//естественно, если скрипт расположен в "хеаде", document.body будет равен null
console.log('');
//выведет все дочерние элементы в body
console.log('все дочерние элеенты body');
for (var i = 0; i < document.body.childNodes.length; i++){
	console.log( document.body.childNodes[i] );
};
console.log('');
//lastChild и firstChild - послдений и первый дочерений элементы
//previousSibling и nextSibling - соседи предыдущий и следующий, соответственно
//эти ссылки на элементы будут перебирать и текстовые элементы типа пробелов и переносов строк
//поэтому надо юзать lastElementChild и firstElementChild и previousElementSibling и nextElementSibling
//и соответственно parentElement
console.log('только дочерние "элеметны" body');
for (var i = 0; i < document.body.children.length; i++){
	console.log(document.body.children[i]);
};