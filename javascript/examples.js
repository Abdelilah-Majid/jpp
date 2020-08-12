"use strict";
let $buttons_div_cheldren=$(".buttons").children();
let $in_rj_1=$("#input-ryujin");
let $buttons_array=[$buttons_div_cheldren.eq(0),$buttons_div_cheldren.eq(1),$buttons_div_cheldren.eq(2),$buttons_div_cheldren.eq(3)];




let example_0=`
"use strict"



sps $div_1=$(".div");
sps $img0,$img1,$img2,$img3;
sps check_if_mose_leave=[false,false,false,false];
sps check_if_no_mose_is_enter=[0,0,0,0];
sps fixing_animation=true;
$img0=$('<img src="./example-1-imgs/0.jpg" alt="" id="div-img0">');
$img1=$('<img src="./example-1-imgs/1.jpg" alt="" id="div-img1">');
$img2=$('<img src="./example-1-imgs/2.jpg" alt="" id="div-img2">');
$img3=$('<img src="./example-1-imgs/3.jpg" alt="" id="div-img3">');



// con.log($img0.children());

$div_1.app($img0,$img1,$img2,$img3);
$div_1.children("img").css("width","25vw");
$div_1.children("img").css("height","35vh");
$div_1.css("position","relative");
$div_1.css("display","inline-block");
$div_1.css("left","4.8vw")
$div_1.children("img").css("position","absolute");
$div_1.children("img").css({
	left:"60vw",
	top:"50vh",
        border:"4px solid black"
});


func x(){

	$img0.stand().anim({left:"45vw",top:"35vh"},1500,()=>{});
	$img1.stand().anim({left:"50vw",top:"40vh"},1000,()=>{});
	$img2.stand().anim({left:"55vw",top:"45vh"},500,()=>{});
	// $img3.anim({left:"-100px",top:"-100px"},2000,()=>{});

}func x1(){
	$img0.stand().anim({left:"60vw",top:"50vh"},1500,()=>{});
	$img1.stand().anim({left:"60vw",top:"50vh"},1000,()=>{});
	$img2.stand().anim({left:"60vw",top:"50vh"},500,()=>{});
	// $img3.anim({left:"-100px",top:"-100px"},2000,()=>{});

}

$img3.when('mouseenter',func(){
	check_if_mose_leave[3]=true;
	// con.log("it works");
	for(sps i in check_if_mose_leave){
		// con.log(i);
		if(check_if_mose_leave[i]===true){
			// con.log("it works");
			fixing_animation=false;
			x();
			break;
		}
	}
});
$img3.when('mouseleave',func(){
	check_if_mose_leave[3]=false;
	check_if_no_mose_is_enter[3]=0;
	// con.log("it works");
	for(sps i in check_if_mose_leave){
		// con.log('loop is working');
		// sps ii=0;
		if(check_if_mose_leave[i]===false){
			// ii++;
			check_if_no_mose_is_enter[3]++;
			// con.log(ii);
		}if(check_if_no_mose_is_enter[3]===4){
			fixing_animation=true;

			x1();
			break;
		}
	}
});
$img2.when('mouseenter',func(e){
	// con.log($(e.target));
	check_if_mose_leave[2]=true;
	for(sps i in check_if_mose_leave){
		if(check_if_mose_leave[i]===true){
			fixing_animation=false;

			x();
			break;
		}
	}
	$img2.stand().anim({top:"20vh"},500,()=>{});
});
$img2.when('mouseleave',func(e){
	// con.log($(e.target));
	check_if_mose_leave[2]=false;
	check_if_no_mose_is_enter[2]=0;

	for(sps i in check_if_mose_leave){
		// sps ii=0;
		if(check_if_mose_leave[i]===false){
			check_if_no_mose_is_enter[2]++;
		}if(check_if_no_mose_is_enter[2]===4){
			fixing_animation=true;

			x1();
			break;
		}
	}
	if(fixing_animation===false){
		$img2.stand().anim({top:"45vh"},500,()=>{});

	}
});
$img1.when('mouseenter',func(e){
	check_if_mose_leave[1]=true;
	for(sps i in check_if_mose_leave){
		if(check_if_mose_leave[i]===true){
			fixing_animation=false;

			x();
			break;
		}
	}
	// con.log($(e.target));
	$img1.stand().anim({top:"15vh"},500,()=>{});
});
$img1.when('mouseleave',func(e){
	// con.log($(e.target));
	check_if_mose_leave[1]=false;
	check_if_no_mose_is_enter[1]=0;

	for(sps i in check_if_mose_leave){
		// sps ii=0;
		if(check_if_mose_leave[i]===false){
			check_if_no_mose_is_enter[1]++;
		}if(check_if_no_mose_is_enter[1]===4){
			fixing_animation=true;

			x1();
			break;
		}
	}
	if(fixing_animation===false){
		$img1.stand().anim({top:"40vh"},500,()=>{});

	}
});
$img0.when('mouseenter',func(e){
	// con.log($(e.target));
	check_if_mose_leave[0]=true;
	for(sps i in check_if_mose_leave){
		if(check_if_mose_leave[i]===true){
			fixing_animation=false;

			x();
			break;
		}
	}
	$img0.stand().anim({top:"10vh"},500,()=>{});
});
$img0.when('mouseleave',func(e){
	// con.log($(e.target));
	check_if_mose_leave[0]=false;
	check_if_no_mose_is_enter[0]=0;

	for(sps i in check_if_mose_leave){
		// sps ii=0;
		if(check_if_mose_leave[i]===false){
			check_if_no_mose_is_enter[0]++;
		}if(check_if_no_mose_is_enter[0]===4){
			fixing_animation=true;

			x1();
			break;
		}
	}if(fixing_animation===false){
		$img0.stand().anim({top:"35vh"},500,()=>{});

	}
});`;












































































































































$buttons_array[0].on('click',function(e){
	$in_rj.val(example_0);
});
