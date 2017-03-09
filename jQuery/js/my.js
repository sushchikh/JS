﻿// устаревшая (depricated) запись запуска скрипта
//$(document).ready(function(){
	
// современная запись	
$(function(){	
	

	var link = $('.features_link');// ловим элмент
	if (link.length){  	// проверяет не пустой ли он
		link.each(function(index, elem){   // метод .each циклично делает функцию с каждым элементом
			setTimeout(function(){
				$(elem).addClass("show"); 
			}, index*300+100);		
		});
	};



	var listElement = $('li'); // ловим все 'li'
	var liHeader = listElement.filter( '.header' ); // среди всех ли ловим содержащие класс ".header"
	var notHeader = listElement.not( '.header' ); // ловим все "li" не содержащие класс ".header"
	var hasSpans = listElement.has( 'span' ); // ловим все "li" имеющие внутри <span>
	
	console.log(listElement);
	console.log(liHeader);
	console.log(notHeader);
	console.log(hasSpans);


	
	
///// карабкаемся по DOM-дереву: //////////////////////////////////////////////////////////////////////////
	
	// среди всех "li" выбираем первый 
	var listItem = $( 'li' ).first(); // и .last()
  
	// соседи по дереву
	var siblings = listItem.siblings();
	  
	// следующий сосед
	var nextSibling = listItem.next(); // И .prev() предыдущий
	  
	// родитель элемента
	var list = listItem.parent();

	// дети элемента
	var listItems = list.children();

	// содержащие <span>
	var allListItems = list.find( 'span' );

	// родилети с классом .module
	var modules = listItem.parents( '.module' );

	// ближайщие к имеющему класс ".module"
	var module = listItem.closest( '.module' );
	
	var someElse = $('.box .wrapper'); //  элементы с классом box и wrapper
	var someElse = $('.box').find('.wrapper'); // тоже, что выше, только работает чуть быстрее
	
	var someElse2 = $('div.wrapper'); //  только дивы с классом wrapper

	var someElse3 = $('h1, h2'); //  h1 и h2
	
	var someElse4 = $('div article h2'); //  h2, которые в article, которые в div
	
	var someElse5 = $('div + p'); // все "p"  перед которыми идет "div"
	
	var someElse6 = $('#someId ~ p'); // все "р" перед которыми идет элемент с id "someId"
	
	var someElse7 = $('.someClass').next(); //$('.someClass').prev() -- следующий/предыдущий элемент за элементом с классом ".someClass"
	
	var someElse8 = $('*'); // все элементы
	
	var someElse9 = $('.someClass > h2'); // все h2, являющиеся непосредственными потомками элементов с классом ".someClass"
	
	var someElse10 = $('.someClass > *'); // все потомки элементов с классом ".someClass"
	
	var someElse11 = $('.someClass').children(); //все потомки элементов с классом ".someClass"
	
	
// поиск по атрибутам ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	var searchAtrr = $('a[href]'); // все ссылки с атрибутом href
	
	var searchAtrr2 = $('a[href=\\#]'); // все ссылки на id
	
	var searchAtrr3 = $('a[href~=\\#]'); // все ссылки у которых в href есть ссылка на id
	
	var searchAtrr4 = $('a[herf^=http]'); // все ссылки начинающиеся на http
	
	var searchAtrr5 = $('a[href*=google\\.com]'); // ссылки имеющие в себе google.com
	
	// !IMPORTANT - надо экранировать (\\ двумя обратными слешами) специальные символы, чтобы jquery не ругался
	
	
// атрибуты элементов и CSS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var attr = $("#my").css('color'); // получаем значение цвета шрифта
	$('attr').css('color', 'red'); // устанавливаем значение цвета шрифта
	// устанавливаем сразу несколько значений
	$('attr').css({
		'color':'red',
		'font-size':'14px',
		'margin-left':'10px'
		});
		
	
// манипуляции с классами ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	$('someElement').addClass('className someOneClass'); // добавляем классы
	$('someElement').hasClass('className'); // проверяет есть ли у элемента заданый класс
	$('someElement').removeClass('className'); // удаляем класс
	$('someElement').toggleClass('className'); //включаем/выключаем класс у элемента
	

// манипуляции	с атрибутами (<a href='атрибут' alt="атрибут" и т.д.>)

	var atrr = $('someElement').attr('alt'); // получаем значение атрибута alt у элемента
	$('attr').attr('scr', '../img/default.png'); // меняем значение атрибута src
	$('attr').removeAttr('alt'); // удалили атрибут alt
	
	
	
// события / events

	$('.list_for_test li').click(function(event){
		console.log('do smth');
		event.preventDefault(); // блокируем стандартное действие (если оно было, например если мы клацаем по ссылке, чтобы не случилось перехода)
		event.stopPropagation(); // блокируем "всплывание в цепочке DOM-дерева", чтобы можно было обрабатывать события по клику на родитлея
});
	
	$('.list_for_test li').click(function(event){
		console.log('do smth else');
		event.stopImmediatePropagation(); // сработает только этот обработчик собтия
		return false; // блокируем стандартное действие + блокируем "всплывание в цепочке DOM-дерева" (альетратива варианту выше)
});
	
	$('.someClass').off(); // удалить обработчик объекта
	

// Touch-события ####################################

	// touchstart - событие при касании пальцем экрана
	// tiuchend - убираем палец с экрана
	// touchmove - водим пальцем по экрану
	// touchcancel - отмена "touch" до того, как палец убран
	


// Animations
	//зарезервированные слова "slow" и "fast" определяют скорсоть анимации в милисекундах, можно просто задавать скорость в мс в скобках после функции

	$('.someClass').hide(600); // скрыть (display: none)
	$('.someClass').show(400); // показать
	$('.someClass').toggle(600); // скрыть/показать используя заданную скорость

	$('.someClass').hide(600, function(){  // добавим к этому колл-бэк функцию, которая выполниться, когда элемент скроется
		console.log('объект скрылся'); 
	});


	$('.someClass').slideUp(500); // свернуть элемент (создание баяна), также возможен коллбэк
	$('.someClass').slideDown(500); // развернуть элемент, также возможен коллбэк
	$('.someClass').slideToggle(600); // развернуть/свернуть , также возможен коллбэк

	$('.someClass').fadeIn(500); // меняет opacity от 0 до предыдущего значения
	$('.someClass').fadeOut(500); // меняет opacity от текущего значения до 0
	$('.someClass').fadeToggle(500); // перключатель между fadeIn и fadeOut
	$('.someClass').fadeTo(500, 0.3); // меняет opacity до указанного значения

	




// TEST AREA############################################################



//// обработка клик-функция ///////////////////////////////////////////////////////////////////////
	
	// $( 'li' ).click(function( event ) {
	// 	console.log( 'clicked', $( this ).text() );
	// });
	
	$('button').click(function(event) {
		var redElement = $('#tools').css('color');
		$('redElement').css('color', 'red');
		//$('span').css('color', 'blue');
		//console.log($('.features_link').hasClass('show'));
		$('li').slideToggle(600, function(){  // добавим к этому колл-бэк функцию, которая выполниться, когда элемент скроется
			console.log('объект скрылся'); 
		});
	});
	
	
	
	
});




























	