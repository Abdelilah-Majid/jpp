let d={};


// 25
function decode(char){
	if(char===" "){
		return true;
	}else if(char==="}"){
		return true;
	}else if(char==="\n"){
		return true;
	}else if(char==="."){
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
	if(true){
		if(firstSymbol==="=="&&secendSymbol==="="){
			console.log("its ==");
			return "=";
		}else if(firstSymbol==="="&&secendSymbol==="="){
			console.log('its =');
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
			console.log("tNS: key does not match");
			return false;
		}
	}
}




































d.decode=decode;
d.tNS=trakeNextSymbol;
