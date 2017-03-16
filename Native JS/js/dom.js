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

//доступ к body, дальше можно плясать внутрь и в бок
//console.log(document.documentElement.firstElementChild.nextElementSibling); -> <body>


//document.getElementById('уникальный идентификатор'); ищет по id 
document.getElementById('test_element').style.backgroundColor = 'lightpink';
document.getElementById('test_element').style.padding = '3px 15px';

//document.getElementsByTagName('div'); ищет все дивы внутри документа
//можно получиль всех потомков использовав * (звездочку) в скобках, например
// var myElement = document.getElementById('myTable');
// myElement.getElementsByTagName(*); -> найдет всех потомков, но вернет коллекцию элментов (все какие есть), соответственно
// myElement.getElementsByTagName(*)[0].value = 5; -> чтобы с первым элементом чтонибудь сделать надо к нему по номеру обратиться


// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.
// var elements = document.querySelectorAll('ul > li:last-child');


// прочитать класс элемента
console.log(document.body.className ); // 



//  ######  ########          #######  ########        ##
// ##    ## ##     ##        ##     ## ##     ##       ##
// ##       ##     ##        ##     ## ##     ##       ##
// ##       ########         ##     ## ########        ##
// ##       ##   ##          ##     ## ##     ## ##    ##
// ##    ## ##    ##  ###    ##     ## ##     ## ##    ##
//  ######  ##     ## ###     #######  ########   ######


var div = document.createElement('div'); // создание элемента с тегом div (но не в HTML)

div.calassName = 'alert alert-success'; // задаем класс объекту div

div.innerHTML = 'Ура, мы научились создавать элементы!'; // заполняем его

div.style.backgroundColor = "white"; // сразу зададаим ему какой-то стиль
div.style.display = "inline-block";
div.style.padding = "10px 30px";
div.style.fontFamily = "roboto";

// пока объект просто создан, но пока еще никуда не вставлен


var parentElement = document.body; // ловим элемент, в который будем вставлять нащ div

parentElement.appendChild(div); // вставляет методом appendChild наш элемент

parentElement.insertBefore(div, parentElement.firstElementChild); // теперь вставим в начало пойманого элемента

//клонируем наш созданный объект
var div2 = div.cloneNode(true);
// зададим ему другое содержание
div2.innerHTML = 'здесь другое сообщение';
// вставим его в HTML
parentElement.appendChild(div2, parentElement.lastElementChild);

// удаление объекта через 3 сек
setTimeout(function () {
	div.parentNode.removeChild(div);
}, 3000);// 1000 = 1 сек


