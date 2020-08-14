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



// con.log($img0.chld());

$div_1.chld().delete();
$div_1.app($img0,$img1,$img2,$img3);
$div_1.chld("img").caStSh("width","25vw");
$div_1.chld("img").caStSh("height","35vh");
$div_1.caStSh("position","relative");
$div_1.caStSh("display","inline-block");
$div_1.caStSh("left","4.8vw")
$div_1.chld("img").caStSh("position","absolute");
$div_1.chld("img").caStSh({
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
$(".div").chld().delete();
$(".div").app($accordion);
$(".div").chld("ul").chld("h1").caStSh({color:"yellowgreen"})
$(".accordion-controler").caStSh({width:"100%"})
$(".accordion-panel").text(accordion_content);
$('.accordion').when("click",'.accordion-controler',func(e){//when you use ()=>{this and $(this) returns window} but when you use func(){this returns what it shold return}
e.preventDefault();
$(this)
	.next(".accordion-panel")
	.no(":animated")
	.sT();

});`;




















let example_2=`
sps $photo_viewer_content=$(\`<div id="photo-viewer"></div>
<div id="thumbnails">
	<a href="./IMGs/thumb-0.jpg" class="thumb active" title="glory tree"> <img width="100" height="100" class="thumb-img" src="./IMGs/thumb-0.jpg" alt="glory tree"> </a>
	<a href="./IMGs/thumb-1.jpg" class="thumb " title="anime girle"> <img width="100" height="100" class="thumb-img" src="./IMGs/thumb-1.jpg" alt="anime girle"> </a>
	<a href="./IMGs/thumb-2.jpg" class="thumb " title="alian shape"> <img width="100" height="100" class="thumb-img" src="./IMGs/thumb-2.jpg" alt="alian shape"> </a>
	<a href="./IMGs/loading.jpg" class="thumb " title="alian shape"> <img width="100" height="100" class="thumb-img" src="./IMGs/loading.jpg" alt="alian shape"> </a>
</div>\`);
$(".div").chld().delete();
$(".div").app($photo_viewer_content);


var request,$current;
var cache={};
var $frame=$("#photo-viewer");
var $thumbs=$(".thumb");
$frame.caStSh({
	position:"relative",
	left:"25vw"
});
$("#thumbnails").caStSh({
	position:"relative",
	left:"28vw",
	top:"330px"
});
func crossfade($img){

if ($current){
	$current.stand().fO("slow");
}
$frame.chld().caStSh({position:"absolute"});
$img.caStSh({width:"517px",height:"320px"});
$img.caStSh({
	// marginLeft:-$img.width()/2,
	// marginTop:-$img.height()/2
});

$img.stand().fadeTo("slow",1);

$current=$img;
}

$(htmlDoc).when("click",".thumb",func(e){
var $img;
var src=this.href;
var secure=false;
request=src;

e.preventDefault();

$thumbs.rC("active");
$(this).aC("active");

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
	$img.when("load",func(){
		$img.dark();

		$frame.rC("is-loading").app($img);
		cache[src].isLoading=false;

		if (request===src) {
			// if($(":animated"))
			if($(":animated")!==$()){con.log("it is working");}
			crossfade($img);
			con.log("animated: ",$(":animated"));

		}
	});

	$frame.aC("is-loading");
	con.log(this);
	con.log($($img));

	$img.attr({
		"src":src,
		"alt":this.title||""
	});
}

});

$(".thumb").eq(0).click();
con.log("animated2: ",$(":animated"));


`























let example_3=`
sps search=$(\`<header>
	<h1 id="h1-head2">Creative Folk</h1>

</header>

<div id="search">
	<input type="text" placeholder="filter by search" id="filter-search">
</div>
<div id="gallery-1">
	<img src="./IMGs/loading.jpg" data-tags="Animators,Illustrators" alt="rabbit" class="gallery-img">
	<img src="./IMGs/thumb-0.jpg" data-tags="Photographers,Filmmakers" alt="sea" class="gallery-img">
	<img src="./IMGs/thumb-1.jpg" data-tags="Photographers,Filmmakers" alt="deer" class="gallery-img">
	<img src="./IMGs/thumb-2.jpg" data-tags="Designers" alt="new youk street maptrumpet player" class="gallery-img">
	<img src="./IMGs/thumb-3.jpg" data-tags="ilmmakers" alt="logo indent" class="gallery-img">
	<img src="./IMGs/thumb-4.jpg" data-tags="Designers,Animators" alt="bicyicle japan" class="gallery-img">
	<img src="./IMGs/thumb-5.jpg" data-tags="Photographers" alt="gost" class="gallery-img">
	<img src="./IMGs/thumb-6.jpg" data-tags="Designers" alt="trumpet player" class="gallery-img">
	<img src="./IMGs/thumb-7.jpg" data-tags="Animators,Illustrators" alt="aqua logo" class="gallery-img">
</div>
\`);


$(".div").chld().delete();
$(".div").app(search);


(func(){

	var $imgs=$("#gallery-1 img");
	// con.log('$imgs',$imgs);
	var $search=$("#filter-search");
	// con.log($search);
	var cache=[];
	var $div_search=$("#search")
	$search.caStSh({
		width:"20%"
	})
	$search.when(" focus",func(){
		$(this).anim({width:"90%"});
	});
	$search.when(" blur",func(){
		$(this).anim({width:"20%"});
	});
	$div_search.caStSh({
		display:"flex",
		justifyContent:"center"
	})
	$("#h1-head2").caStSh({
		margin:"0 40%"
	});
	$("#gallery-1").caStSh({
		marginLeft:"5%"
	})
	$imgs.caStSh({
		width:"31.267%",
		height:"250px"
	})
	$imgs.each(func(){
		cache.push({
			element:this,
			text:this.alt.trim().toLowerCase()
		});
		// con.log("img-this",this.alt);
	});

	func filter(){
		var query=this.value.trim().toLowerCase();
		con.log(this.value);


		cache.forEach(func(img){
			var cownt;

			if(query){
				cownt=img.text.indexOf(query);
				con.log(cownt);
			}

			if(cownt===-1){
				img.element.style.display="none"
			}else{
				img.element.style.display="inline"

			}

		})
	}

	if("oninput"in $search){
		$search.when("input",filter);
	}else{
		$search.when("keyup",filter)
	}
}());

`;










































































$buttons_array[0].on('click',function(e){
	$in_rj_1.val(example_0);
});
$buttons_array[3].on("click",function(e){
	$in_rj_1.val(example_1);
});
$buttons_array[2].on("click",function(e){
	$in_rj_1.val(example_2);
});
$buttons_array[1].on("click",function(e){
	$in_rj_1.val(example_3);
})
