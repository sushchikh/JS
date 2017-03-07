$(document).ready(function(){
	

	var link = $('.features_link');// выбираем элементы
	if (link.length){  	// проверяем не пустой ли элемент (существует ли он)
		link.each(function(index, elem){   // метод беребора элементо each, передает функции в нем параметры index и elem
			setTimeout(function(){
				$(elem).addClass("show"); // $(elem) - последовательно все элементы of each
			}, index*300);		
		});
	};



	var listElement = $('li'); // выбор всех li на странице
	var liHeader = listElement.filter( '.header' ); // фильтр выбирает только элементы из li с классом main
	var notHeader = listElement.not( '.header' ); // выбираем элеметны БЕЗ класса header
	var hasSpans = listElement.has( 'span' ); // выбор элементов li, имеющих внтури <span>
	
	console.log(listElement);
	console.log(liHeader);
	console.log(notHeader);
	console.log(hasSpans);
	
	
	// карабкаемся по DOM-дереву:
	
	// Получить первый пункт списка на странице
	var listItem = $( 'li' ).first(); // и .last()
  
	// Получить родственные элементы этого пункта списка
	var siblings = listItem.siblings();
	  
	// Получить следующего родственника этого пункта списка
	var nextSibling = listItem.next(); // и .prev()
	  
	// Получить родителя этого пункта списка
	var list = listItem.parent();

	// Получить пункты списка являющихся непосредственными потомками list
	var listItems = list.children();

	// Получить ВСЕ пункты списка из list, включая вложенные
	var allListItems = list.find( 'span' );

	// Найти всех предков этого пункта списка с классом module
	var modules = listItem.parents( '.module' );

	// Найти ближайшего предка этого пункта списка с классом module
	var module = listItem.closest( '.module' );
	
	console.log('');
	
	
	// element.addClass('class'); -- добавление класса
	// element.removeClass('class'); -- удаление класса
	// element.toggleClass('class'); -- переключение класса (если нет — добавит, если есть — уберет)
	
	
	
	$( 'li' ).click(function( event ) {
		console.log( 'clicked', $( this ).text() );
	});
	
	
	
	
	
	
});
	