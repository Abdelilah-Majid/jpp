console.log("by the name of allah");




let $out_js=$("#output-js");
let $in_rj=$("#input-ryujin");
let in_val="";
let in_val_checkout="";
let in_array_index=0;
let in_array_chartAt_index=0;
let in_array=[];
let first_type=false;
let iACAI_IAI_relation={0:-1};





// console.log($out_js);
$out_js.on("focus",function(){
	$(this).blur();//if you focus on in_js it blur it out
});

// console.log($in_rj);
$in_rj.on('keyup',function(e){
	if(first_type===false){
		this.value="";
		first_type=true;//clear last sessen code
	}
	in_val=this.value;
	// console.log(in_val);
	if(in_val_checkout!==in_val){
		if(in_array[in_array_index]===undefined){
			in_array[in_array_index]="";//if in_array current var === undefined mak it emty string
		}

		// console.log(e);
		if(in_val_checkout.length<in_val.length){//if the user is adding
			//NOTE: use iACAI_IAI_relation for your next step;
			if(d.decode(e.key)){//if input is a symbol
				// console.log(d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),e.key));
				if(d.tNS(in_array[in_array_index],e.key)){//if here is a compelet sharacter
					console.log("it auto");
					// console.log("it work");
					in_array[in_array_index]+=d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),e.key);//add input
					in_array_chartAt_index++;//rise the character tracer by 1;
					iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;
				}else{
					console.log("its defult");
					in_array_index++;//put the current key into the next array var
					in_array_chartAt_index=0;
					in_array[in_array_index]="";//clear undefined
					in_array[in_array_index]+=e.key;//add key
					in_array_chartAt_index++;//rise the character tracer by 1;
					iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;

				}
			}else{
				in_array[in_array_index]+=e.key;//add key
				in_array_chartAt_index++;//rise the character tracer by 1;
				iACAI_IAI_relation[in_array_index]=in_array_chartAt_index-1;
			}
		}
		// console.log(in_array_chartAt_index);
		// console.log(in_array_index);
		// if("="){console.log("= is working");}
		// if("=="){console.log("== is working");}
		console.log("in array.chartAt:",in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]));
		console.log("in array:",in_array[in_array_index]);
		console.log("key",e.key);
		console.log("d.tNS",d.tNS(in_array[in_array_index].charAt(iACAI_IAI_relation[in_array_index]),e.key));
		console.log(iACAI_IAI_relation);
		console.log(in_array);
		in_val_checkout=in_val;//end if();
	}

});
