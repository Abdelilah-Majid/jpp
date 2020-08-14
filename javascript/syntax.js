let s={};








function syntax(rj_array_code){
	let js_array_code=[];
	for (var i = 0; i < rj_array_code.length; i++) {
		//js
		if(rj_array_code[i]==="var") {
			js_array_code[i]="var";
		}else if(rj_array_code[i]==="const") {
			js_array_code[i]="const";
		}else if(rj_array_code[i]==="sps") {
			js_array_code[i]="let";
		}else if(rj_array_code[i]==="con") {
			js_array_code[i]="console";
		}else if(rj_array_code[i]==="log") {
			js_array_code[i]="log";
		}else if(rj_array_code[i]==="func") {
			js_array_code[i]="function";
		}else if(rj_array_code[i]==="if") {
			js_array_code[i]="if";
		}else if(rj_array_code[i]==="else") {
			js_array_code[i]="else";
		}else if(rj_array_code[i]==="do") {
			js_array_code[i]="do";
		}else if(rj_array_code[i]==="while") {
			js_array_code[i]="while";
		}else if(rj_array_code[i]==="htmlDoc") {
			js_array_code[i]="document";
		}else if(rj_array_code[i]==="gEBI") {
			js_array_code[i]="getElementById";
		}else if(rj_array_code[i]==="gEBCN") {
			js_array_code[i]="getElementsByClassName";
		}else if(rj_array_code[i]==="gEBTN") {
			js_array_code[i]="getElementsByTagName";
		}else if(rj_array_code[i]==="cA") {
			js_array_code[i]="createAttribute";
		}else if(rj_array_code[i]==="cE") {
			js_array_code[i]="createElement";
		}else if(rj_array_code[i]==="cTN") {
			js_array_code[i]="createTextNode";
		}else if(rj_array_code[i]==="iT") {
			js_array_code[i]="innerText";
		}else if(rj_array_code[i]==="cN") {
			js_array_code[i]="className";
		}else if(rj_array_code[i]==="id") {
			js_array_code[i]="id";
		}else if(rj_array_code[i]==="aEL") {
			js_array_code[i]="addEventListener";
		}else if(rj_array_code[i]==="appCh") {
			js_array_code[i]="appendChild";
		}else if(rj_array_code[i]==="event") {
			js_array_code[i]="event";
		}
		//some securety stuff
		else if(rj_array_code[i]==="write") {
			js_array_code[i]="notWright";
		}else if(rj_array_code[i]==="innerHTML") {
			js_array_code[i]="notInnerHTML";
		}else if(rj_array_code[i]==="writeln") {
			js_array_code[i]="notWriteln";
		}else if(rj_array_code[i]==="eval") {
			js_array_code[i]="notEval";
		}
		//jq

		else if(rj_array_code[i]==="$") {
			js_array_code[i]="$";
		}else if(rj_array_code[i]==="each") {
			js_array_code[i]="each";
		}else if(rj_array_code[i]==="choose") {
			js_array_code[i]="find";
		}else if(rj_array_code[i]==="when") {
			js_array_code[i]="on";
		}else if(rj_array_code[i]==="add") {
			js_array_code[i]="add";
		}else if(rj_array_code[i]==="doesItHave") {
			js_array_code[i]="has";
		}else if(rj_array_code[i]==="delete") {
			js_array_code[i]="remove";
		}else if(rj_array_code[i]==="iH") {
			js_array_code[i]="innerHeight";
		}else if(rj_array_code[i]==="iW") {
			js_array_code[i]="innerWidth";
		}else if(rj_array_code[i]==="wait") {
			js_array_code[i]="delay";
		}else if(rj_array_code[i]==="fI") {
			js_array_code[i]="fadeIn";
		}else if(rj_array_code[i]==="fO") {
			js_array_code[i]="fadeOut";
		}else if(rj_array_code[i]==="fT") {
			js_array_code[i]="fadeToggle";
		}else if(rj_array_code[i]==="done") {
			js_array_code[i]="finish";
		}else if(rj_array_code[i]==="dark") {
			js_array_code[i]="hide";
		}else if(rj_array_code[i]==="light") {
			js_array_code[i]="show";
		}else if(rj_array_code[i]==="sD") {
			js_array_code[i]="slideDown";
		}else if(rj_array_code[i]==="sT") {
			js_array_code[i]="slideToggle";
		}else if(rj_array_code[i]==="sU") {
			js_array_code[i]="slideUp";
		}else if(rj_array_code[i]==="stand") {
			js_array_code[i]="stop";
		}else if(rj_array_code[i]==="aC") {
			js_array_code[i]="addClass";
		}else if(rj_array_code[i]==="app") {
			js_array_code[i]="append";
		}else if(rj_array_code[i]==="attr") {
			js_array_code[i]="attr";
		}else if(rj_array_code[i]==="hC") {
			js_array_code[i]="hasClass";
		}else if(rj_array_code[i]==="cownt") {
			js_array_code[i]="index";
		}else if(rj_array_code[i]==="eq") {
			js_array_code[i]="eq";
		}else if(rj_array_code[i]==="no") {
			js_array_code[i]="not";
		}else if(rj_array_code[i]==="text") {
			js_array_code[i]="text";
		}else if(rj_array_code[i]==="anim") {
			js_array_code[i]="animate";
		}else if(rj_array_code[i]==="rC") {
			js_array_code[i]="removeClass";
		}else if(rj_array_code[i]==="chld") {
			js_array_code[i]="children";
		}else if(rj_array_code[i]==="caStSh") {
			js_array_code[i]="css";
		}
		//some securety stuff
		else if(rj_array_code[i]==="html") {
			js_array_code[i]="notHtml";
		}else{
			js_array_code[i]=rj_array_code[i];
		}
	}

	return js_array_code;
}


s.syntax=syntax;
