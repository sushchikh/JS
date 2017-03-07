$(document).ready(function(){
	

	var link = $('.features_link');// �������� ��������
	if (link.length){  	// ��������� �� ������ �� ������� (���������� �� ��)
		link.each(function(index, elem){   // ����� �������� �������� each, �������� ������� � ��� ��������� index � elem
			setTimeout(function(){
				$(elem).addClass("show"); // $(elem) - ��������������� ��� �������� of each
			}, index*300);		
		});
	};



	var listElement = $('li'); // ����� ���� li �� ��������
	var liHeader = listElement.filter( '.header' ); // ������ �������� ������ �������� �� li � ������� main
	var notHeader = listElement.not( '.header' ); // �������� �������� ��� ������ header
	var hasSpans = listElement.has( 'span' ); // ����� ��������� li, ������� ������ <span>
	
	console.log(listElement);
	console.log(liHeader);
	console.log(notHeader);
	console.log(hasSpans);
	
	
	// ����������� �� DOM-������:
	
	// �������� ������ ����� ������ �� ��������
	var listItem = $( 'li' ).first(); // � .last()
  
	// �������� ����������� �������� ����� ������ ������
	var siblings = listItem.siblings();
	  
	// �������� ���������� ������������ ����� ������ ������
	var nextSibling = listItem.next(); // � .prev()
	  
	// �������� �������� ����� ������ ������
	var list = listItem.parent();

	// �������� ������ ������ ���������� ����������������� ��������� list
	var listItems = list.children();

	// �������� ��� ������ ������ �� list, ������� ���������
	var allListItems = list.find( 'span' );

	// ����� ���� ������� ����� ������ ������ � ������� module
	var modules = listItem.parents( '.module' );

	// ����� ���������� ������ ����� ������ ������ � ������� module
	var module = listItem.closest( '.module' );
	
	console.log('');
	
	
	// element.addClass('class'); -- ���������� ������
	// element.removeClass('class'); -- �������� ������
	// element.toggleClass('class'); -- ������������ ������ (���� ��� � �������, ���� ���� � ������)
	
	
	
	$( 'li' ).click(function( event ) {
		console.log( 'clicked', $( this ).text() );
	});
	
	
	
	
	
	
});
	