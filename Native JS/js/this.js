window.onload = function(){
	
	
	var item = document.querySelectorAll('.item');
	// console.log(item);
	for (var i = 0; i < item.length; i++){
		item[i].onclick = makeActive;
	};

	
	


	
	function makeActive(){
		this.classList.toggle('is_active')
	};	
	
};