c={};




function convert(array){
	let string="";
	for (var i = 0; i < array.length; i++) {
		string+=array[i];
	}

	return string;
}
c.arrayToString=convert;
