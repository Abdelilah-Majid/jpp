console.log("by the name of allah");




let $out_js=$("#output-js");
let $in_rj=$("#input-ryujin");
let in_val="";
let in_val_checkout="";
let in_array_index=0;
let in_array=[];



// console.log($out_js);
$out_js.on("focus",function(){
	$(this).blur();
});

// console.log($in_rj);
$in_rj.on('keyup',function(e){
	in_val=this.value;
	console.log(in_val);
	if(in_val_checkout!==in_val){
		for (var i = 0; i < in_val.length; i++) {
			if(in_array[in_array_index]===undefined){
				in_array[in_array_index]="";
			}



		}

		console.log(in_array);
		in_val_checkout=in_val;
	}
})
