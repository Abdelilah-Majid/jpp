console.log("by the name of allah");




let $out_js=$("#output-js");
// console.log($out_js);
$out_js.on("focus",function(){
	$(this).blur();
});

let $in_rj=$("#input-ryujin");
// console.log($in_rj);
let in_val="";
$in_rj.on('keyup',function(e){
	in_val=this.value;
	console.log(in_val);
})
