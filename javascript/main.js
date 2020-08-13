console.log("by the name of allah");




let $out_js=$("#output-js");
let $in_rj=$("#input-ryujin");
let in_val="";
let in_val_checkout="";
let in_array_index=0;
let in_array_chartAt_index=0;
let in_array=[""];
let iACAI_IAI_relation={0:-1};
let js_array_code;
let js="";






// console.log($out_js);
$out_js.on("focus",function(){
	$(this).blur();//if you focus on in_js it blur it out
});

// console.log($in_rj);
$in_rj.on('keyup',function(e){

	in_val=this.value;
	// console.log(in_val);
	// console.log("loop is working");
	in_array=[];
	in_array_chartAt_index=0;
	in_array_index=0;
	iACAI_IAI_relation={0:-1};
	for(i in in_val){



		if(in_array[in_array_index]===undefined){
			in_array[in_array_index]="";//if in_array current var === undefined mak it emty string
		}

		// console.log(e);
		//NOTE: use iACAI_IAI_relation for your next step;
		if(d.decode(in_val.charAt(i))){//if input is a symbol
			// console.log(d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),e.key));
			if(d.tNS(in_array[in_array_index],in_val.charAt(i))){//if here is a compelet sharacter
				// console.log("its auto");
				// console.log("it work");
				in_array[in_array_index]+=d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),in_val.charAt(i));//add input
				in_array_chartAt_index++;//rise the character tracer by 1;
				iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;
			}else{
				// console.log("its defult");
				in_array_index++;//put the current key into the next array var
				in_array_chartAt_index=0;
				if(in_val.charAt(i)==='"'){
					// console.log("one");
					in_array[in_array_index]='';
				}else{
					// console.log("two");
					in_array[in_array_index]="";//clear undefined
				}
				in_array[in_array_index]+=in_val.charAt(i);//add key
				in_array_chartAt_index++;//rise the character tracer by 1;
				iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;

			}
		}else{
			if(d.decode(in_val.charAt(i-1))){
				in_array_index++;
				in_array[in_array_index]="";
				// console.log();
			}
			in_array[in_array_index]+=in_val.charAt(i);//add key
			in_array_chartAt_index++;//rise the character tracer by 1;
			iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;
		}
		// console.log(in_array_chartAt_index);
		// console.log(in_array_index);
		// if("="){console.log("= is working");}
		// if("=="){console.log("== is working");}
	}
	js_array_code=s.syntax(in_array);
	js=c.arrayToString(js_array_code);
	rj_array_code=rev.xx(in_array);
	rj=c.arrayToString(rj_array_code);
	if(in_array[0]==="js"){
		$out_js.val(rj);
		eval(in_val);
	}else{
		$out_js.val(js);
		eval(js);

	}
	// console.log("in array.chartAt:",in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]));
	// console.log("in array:",in_array[in_array_index]);
	// console.log("key",e.key);
	// console.log("d.tNS",d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),e.key));
	// console.log(iACAI_IAI_relation);
	//
	//
	// console.log("rj_array",in_array);
	// console.log("js_array",js_array_code);
	// console.log(js);
	in_val_checkout=in_val;//end if();

});







$(".buttons").children().on("click",function(e){
	$in_rj.keyup();
})
$(function(){
	$in_rj.keyup();
}())
