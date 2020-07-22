let d={};


// 25
function decode(char){
	if(char===" "){
		return true;
	}else if(char==="}"){
		return true;
	}else if(char==="="){
		return true;
	}else if(char==="+"){
		return true;
	}else if(char==="]"){
		return true;
	}else if(char===")"){
		return true;
	}else if(char==="`"){
		return true;
	}else if(char==="|"){
		return true;
	}else if(char==="-"){
		return true;
	}else if(char==="["){
		return true;
	}else if(char==="("){
		return true;
	}else if(char==="{"){
		return true;
	}else if(char==="'"){
		return true;
	}else if(char==='"'){
		return true;
	}else if(char==="&"){
		return true;
	}else if(char==="*"){
		return true;
	}else if(char==="%"){
		return true;
	}else if(char==="!"){
		return true;
	}else if(char===":"){
		return true;
	}else if(char===";"){
		return true;
	}else if(char===","){
		return true;
	}else if(char==="<"){
		return true;
	}else if(char===">"){
		return true;
	}else if(char==="/"){
		return true;
	}else if(char==="?"){
		return true;
	}else{
		return false;
	}
}

function trakeNextSymbol(firstSymbol,secendSymbol){
	if(firstSymbol!==secendSymbol){
		return false;
	}else{
		if(firstSymbol==="="&&secendSymbol==="="){
			return "=";
		}else if(firstSymbol==="=="&&secendSymbol==="="){
			return"=";
		}else if(firstSymbol==="!"&&secendSymbol==="="){
			return"=";
		}else if(firstSymbol==="!="&&secendSymbol==="="){
			return"=";
		}else if(firstSymbol==="&"&&secendSymbol==="&"){
			return"&";
		}else if(firstSymbol==="|"&&secendSymbol==="|"){
			return"|";
		}else if(firstSymbol==="<"&&secendSymbol==="="){
			return"=";
		}else if(firstSymbol===">"&&secendSymbol==="="){
			return"=";
		}else{
			return false;
		}
	}
}




































d.decode=decode;
d.tNS=trakeNextSymbol;
