let rev={};








function x(rj_array_code){
	let js_array_code=[];
	for (var i = 0; i < rj_array_code.length; i++) {
		//js
		if(rj_array_code[i]==="var") {
			js_array_code[i]="var";
		}else if(rj_array_code[i]==="const") {
			js_array_code[i]="const";
		}else if(rj_array_code[i]==="let") {
			js_array_code[i]="sps";
		}else if(rj_array_code[i]==="console") {
			js_array_code[i]="con";
		}else if(rj_array_code[i]==="log") {
			js_array_code[i]="log";
		}else if(rj_array_code[i]==="function") {
			js_array_code[i]="func";
		}else if(rj_array_code[i]==="if") {
			js_array_code[i]="if";
		}else if(rj_array_code[i]==="else") {
			js_array_code[i]="else";
		}else if(rj_array_code[i]==="do") {
			js_array_code[i]="do";
		}else if(rj_array_code[i]==="while") {
			js_array_code[i]="while";
		}else if(rj_array_code[i]==="document") {
			js_array_code[i]="htmlDoc";
		}else if(rj_array_code[i]==="getElementById") {
			js_array_code[i]="gEBI";
		}else if(rj_array_code[i]==="getElementsByClassName") {
			js_array_code[i]="gEBCN";
		}else if(rj_array_code[i]==="getElementsByTagName") {
			js_array_code[i]="gEBTN";
		}else if(rj_array_code[i]==="createAttribute") {
			js_array_code[i]="cA";
		}else if(rj_array_code[i]==="createElement") {
			js_array_code[i]="cE";
		}else if(rj_array_code[i]==="createTextNode") {
			js_array_code[i]="cTN";
		}else if(rj_array_code[i]==="innerText") {
			js_array_code[i]="iT";
		}else if(rj_array_code[i]==="className") {
			js_array_code[i]="cN";
		}else if(rj_array_code[i]==="id") {
			js_array_code[i]="id";
		}else if(rj_array_code[i]==="addEventListener") {
			js_array_code[i]="aEL";
		}else if(rj_array_code[i]==="appendChild") {
			js_array_code[i]="appCh";
		}else if(rj_array_code[i]==="event") {
			js_array_code[i]="event";
		}
		// some secuerety stuff
		else if(rj_array_code[i]==="write") {
			js_array_code[i]="notWright";
		}else if(rj_array_code[i]==="innerHTML") {
			js_array_code[i]="notInnerHTML";
		}else if(rj_array_code[i]==="writeln") {
			js_array_code[i]="notWriteln";
		}else if(rj_array_code[i]==="eval") {
			js_array_code[i]="notEval";
		}else if(rj_array_code[i]==="script") {
			js_array_code[i]="notScript";
		}
		//jq

		else if(rj_array_code[i]==="$") {
			js_array_code[i]="$";
		}else if(rj_array_code[i]==="each") {
			js_array_code[i]="each";
		}else if(rj_array_code[i]==="find") {
			js_array_code[i]="choose";
		}else if(rj_array_code[i]==="on") {
			js_array_code[i]="when";
		}else if(rj_array_code[i]==="add") {
			js_array_code[i]="add";
		}else if(rj_array_code[i]==="has") {
			js_array_code[i]="doesItHave";
		}else if(rj_array_code[i]==="remove") {
			js_array_code[i]="delete";
		}else if(rj_array_code[i]==="innerHeight") {
			js_array_code[i]="iH";
		}else if(rj_array_code[i]==="innerWidth") {
			js_array_code[i]="iW";
		}else if(rj_array_code[i]==="delay") {
			js_array_code[i]="wait";
		}else if(rj_array_code[i]==="fadeIn") {
			js_array_code[i]="fI";
		}else if(rj_array_code[i]==="fadeOut") {
			js_array_code[i]="fO";
		}else if(rj_array_code[i]==="fadeToggle") {
			js_array_code[i]="fT";
		}else if(rj_array_code[i]==="finish") {
			js_array_code[i]="done";
		}else if(rj_array_code[i]==="hide") {
			js_array_code[i]="dark";
		}else if(rj_array_code[i]==="show") {
			js_array_code[i]="light";
		}else if(rj_array_code[i]==="slideDown") {
			js_array_code[i]="sD";
		}else if(rj_array_code[i]==="slideToggle") {
			js_array_code[i]="sT";
		}else if(rj_array_code[i]==="slideUp") {
			js_array_code[i]="sU";
		}else if(rj_array_code[i]==="stop") {
			js_array_code[i]="stand";
		}else if(rj_array_code[i]==="addClass") {
			js_array_code[i]="aC";
		}else if(rj_array_code[i]==="append") {
			js_array_code[i]="app";
		}else if(rj_array_code[i]==="attr") {
			js_array_code[i]="attr";
		}else if(rj_array_code[i]==="hasClass") {
			js_array_code[i]="hC";
		}else if(rj_array_code[i]==="index") {
			js_array_code[i]="cownt";
		}else if(rj_array_code[i]==="eq") {
			js_array_code[i]="eq";
		}else if(rj_array_code[i]==="not") {
			js_array_code[i]="no";
		}else if(rj_array_code[i]==="text") {
			js_array_code[i]="text";
		}else if(rj_array_code[i]==="animate") {
			js_array_code[i]="anim";
		}else if(rj_array_code[i]==="removeClass") {
			js_array_code[i]="rC";
		}else if(rj_array_code[i]==="children") {
			js_array_code[i]="chld";
		}else if(rj_array_code[i]==="css") {
			js_array_code[i]="caStSh";
		}
		// some secuerety stuff
		else if(rj_array_code[i]==="html") {
			js_array_code[i]="notHtml";
		}else{
			js_array_code[i]=rj_array_code[i];
		}
	}

	return js_array_code;
}


rev.xx=x;
