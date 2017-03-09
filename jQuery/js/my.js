$(document).ready(function(){
	

	var link = $('.features_link');// ловим элмент
	if (link.length){  	// проверяет не пустой ли он
		link.each(function(index, elem){   // метод .each циклично делает функцию с каждым элементом
			setTimeout(function(){
				$(elem).addClass("show"); 
			}, index*300+100);		
		});
	};



	var listElement = $('li'); // âûáîð âñåõ li íà ñòðàíèöå
	var liHeader = listElement.filter( '.header' ); // ôèëüòð âûáèðàåò òîëüêî ýëåìåíòû èç li ñ êëàññîì main
	var notHeader = listElement.not( '.header' ); // âûáèðàåì ýëåìåòíû ÁÅÇ êëàññà header
	var hasSpans = listElement.has( 'span' ); // âûáîð ýëåìåíòîâ li, èìåþùèõ âíòóðè <span>
	
	console.log(listElement);
	console.log(liHeader);
	console.log(notHeader);
	console.log(hasSpans);
	
	
	// êàðàáêàåìñÿ ïî DOM-äåðåâó:
	
	// Ïîëó÷èòü ïåðâûé ïóíêò ñïèñêà íà ñòðàíèöå
	var listItem = $( 'li' ).first(); // è .last()
  
	// Ïîëó÷èòü ðîäñòâåííûå ýëåìåíòû ýòîãî ïóíêòà ñïèñêà
	var siblings = listItem.siblings();
	  
	// Ïîëó÷èòü ñëåäóþùåãî ðîäñòâåííèêà ýòîãî ïóíêòà ñïèñêà
	var nextSibling = listItem.next(); // è .prev()
	  
	// Ïîëó÷èòü ðîäèòåëÿ ýòîãî ïóíêòà ñïèñêà
	var list = listItem.parent();

	// Ïîëó÷èòü ïóíêòû ñïèñêà ÿâëÿþùèõñÿ íåïîñðåäñòâåííûìè ïîòîìêàìè list
	var listItems = list.children();

	// Ïîëó÷èòü ÂÑÅ ïóíêòû ñïèñêà èç list, âêëþ÷àÿ âëîæåííûå
	var allListItems = list.find( 'span' );

	// Íàéòè âñåõ ïðåäêîâ ýòîãî ïóíêòà ñïèñêà ñ êëàññîì module
	var modules = listItem.parents( '.module' );

	// Íàéòè áëèæàéøåãî ïðåäêà ýòîãî ïóíêòà ñïèñêà ñ êëàññîì module
	var module = listItem.closest( '.module' );
	
	console.log('');
	
	
	// element.addClass('class'); -- äîáàâëåíèå êëàññà
	// element.removeClass('class'); -- óäàëåíèå êëàññà
	// element.toggleClass('class'); -- ïåðåêëþ÷åíèå êëàññà (åñëè íåò — äîáàâèò, åñëè åñòü — óáåðåò)
	
	
	
	// $( 'li' ).click(function( event ) {
	// 	console.log( 'clicked', $( this ).text() );
	// });
	
	$('button').click(function(event) {
		$('span').hide();
	});
	
	
	
	
});
	