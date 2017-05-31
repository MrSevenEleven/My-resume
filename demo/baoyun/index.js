// JavaScript Document
/*课程页面切换特效*/
$(function(){
	$(".classification a").mouseover(function(){
			$(".classification a").css("color","#747474");
			$(this).css("color","#59a6f7");
			if($(this).html()=="精品课程"){
				$("#os-list ul").css("display","none");
				$("#excellent-course").css("display","block");
				}
			else if($(this).html()=="最新课程"){
				$("#os-list ul").css("display","none");
				$("#newest-course").css("display","block");
				}
			else if($(this).html()=="全部课程"){
				$("#os-list ul").css("display","none");
				$("#all-course").css("display","block");
				}
			
		})
	
	
	
	})