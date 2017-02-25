var space, cell, i;
cell = '#';
i = 0;
while (i < 10){
	if (i % 2 == 0){
	i++;
	cell = cell + ' #';}
	else {
		i++;
		cell = ' ' + cell;
	}
};
console.log(cell);
