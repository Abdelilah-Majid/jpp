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

$div_1.children().remove();
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




















let example_1=`sps accordion_content="this is the accordion content ------- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

sps $accordion=$(\`<ul class='accordion'>
		<h1>toggel accordion to see the effect</h1>
		<li>
			<button class='accordion-controler' type='button' name='button'>toggel accordion 0</button>
			<div class='accordion-panel'>

			</div>
		</li>
		<li>
			<button class='accordion-controler' type='button' name='button'>toggel accordion 1</button>
			<div class='accordion-panel'>

			</div>
		</li>
		<li>
			<button class='accordion-controler' type='button' name='button'>toggel accordion 2</button>
			<div class='accordion-panel'>

			</div>
		</li>
	</ul>\`);
$(".div").children().delete();
$(".div").app($accordion);
$(".div").children("ul").children("h1").css({color:"yellowgreen"})
$(".accordion-controler").css({width:"100%"})
$(".accordion-panel").text(accordion_content);
$('.accordion').when("click",'.accordion-controler',func(e){//when you use ()=>{this and $(this) returns window} but when you use func(){this returns what it shold return}
e.preventDefault();
$(this)
	.next(".accordion-panel")
	.no(":animated")
	.sT();

});`




















let example_2=`
var request,$current;
var cache={};
var $frame=$("#photo-viewer");
var $thumbs=$(".thumb");

function crossfade($img){

if ($current){
	$current.stop().fadeOut("slow");
}

$img.css({
	marginLeft:-$img.width()/2,
	marginTop:-$img.height()/2
});

$img.stop().fadeTo("slow",1);

$current=$img;
}

$(document).on("click",".thumb",function(e){
var $img;
var src=this.href;
request=src;

e.preventDefault();

$thumbs.removeClass("active");
$(this).addClass("active");

if (cache.hasOwnProperty(src)) {
	if (cache[src].isLoading===false){
		crossfade(cache[src].$img);
	}
}else{
	$img=$("<img/>");
	cache[src]={
		$img:$img,
		isLoading:true
	};
	$img.on("load",function(){
		$img.hide();

		$frame.removeClass("is-loading").append($img);
		cache[src].isLoading=false;

		if (request===src) {
			crossfade($img);
		}
	})

	$frame.addClass("is-loading");
	console.log(this);
	$img.attr({
		"src":src,
		"alt":this.title||""
	})
}

});

$(".thumb").eq(0).click();
`


































































































$buttons_array[0].on('click',function(e){
	$in_rj_1.val(example_0);
});
$buttons_array[1].on("click",function(e){
	$in_rj_1.val(example_1);
})
