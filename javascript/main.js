console.log("by the name of allah");




let $out_js=$("#output-js");
let $in_rj=$("#input-ryujin");
let in_val="";
let in_val_checkout="";
let in_array_index=0;
let in_array_chartAt_index=0;
let in_array=[];
let first_type=false;
let iACAI_IAI_relation={};





// console.log($out_js);
$out_js.on("focus",function(){
	$(this).blur();
});

// console.log($in_rj);
$in_rj.on('keyup',function(e){
	console.log(in_array_chartAt_index);
	if(first_type===false){
		first_type=true;
		this.value="";
	}
	in_val=this.value;
	console.log(in_val);
	if(in_val_checkout!==in_val){
		if(in_array[in_array_index]===undefined){
			in_array[in_array_index]="";
		}
		// console.log(e);
		if(in_val_checkout.length<in_val.length){
			//NOTE: use iACAI_IAI_relation for your next step;
			if(d.decode(e.key)){
				console.log(d.tNS(in_array[in_array_index].charAt(in_array_chartAt_index),e.key));
				if(d.tNS(in_array[in_array_index].charAt(in_array_chartAt_index),e.key)){
					console.log("it work");
					in_array[in_array_index]+=e.key;
					in_array_chartAt_index++;
				}else{
					in_array_index++;
					in_array[in_array_index]="";
					in_array[in_array_index]+=e.key;
					in_array_chartAt_index++;

				}
			}else{
				in_array[in_array_index]+=e.key;
				in_array_chartAt_index++;
			}
		}
		console.log(in_array);
		in_val_checkout=in_val;
	}

});
