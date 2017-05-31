// JavaScript Document

$(function(){
    Showhidepoem();/*home页poem轮播*/
    Imgrolling();/*aboutme页图片上下浮动转换*/
    Contentslide();/*skills页滑动隐现*/
﻿    Fittingheight();/*自适应高度*/
	Showmessage();/*skills页滑动隐现*/
	$('#dowebok').fullpage({
		scrollingSpeed: 400,
		menu:'nav ul',
		css3: true,
		resize: false,
		anchors: ['page1','page2','page3','page4','page5'],
		verticalCentered: false,
		afterLoad: function(anchorlink,index){
			if(index==2){
				$('.title-en').animate({width:'200px'},800,function(){
					$('.title h3').slideDown(400);
					});
				$('#aboutme-content').animate({width:'680px'},500,function(){
						$('#aboutme-content p').eq(0).animate({bottom:'0'},700,function(){
							$('#aboutme-content p').eq(1).animate({bottom:'0'},700,function(){
								$('#aboutme-content p').eq(2).animate({bottom:'0'},700,function(){
									$('#aboutme-content p').eq(3).animate({bottom:'0'},700,function(){
										$('#aboutme-content p').eq(4).animate({bottom:'0'},700)
									});
								});
							});
						});
					});	
				}
			if(index==3){
				$('.title-en').animate({width:'200px'},800,function(){
					$('.title h3').slideDown(400);
					});
			}
			if(index==4){
				$('.title-en').animate({width:'200px'},800,function(){
					$('.title h3').slideDown(400);
					});
			}
			if(index==5){
				$('.title-en').animate({width:'200px'},800,function(){
					$('.title h3').slideDown(400);
					$('#cm-content p').animate({height:'32px'},1000,function(){
					$('#cm-content span').animate({height:'36px'},1000);
					});
					});
				
			}		
			},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5){
				$('.title-en').css('width','0px');
				$('.title h3').slideUp(20);		
			}	
		}
		
		
		});

 
    
/*home页poem轮播*/
    function Showhidepoem(){
    var index=0;
    showpoem();
    function showpoem(){
    var speed=0;    
    showtimer=setInterval(function(){    
    if(speed>=100){
            clearInterval(showtimer);
            setTimeout(hiddenpoem,2000);    
        };   
    $('#poem p:eq('+index+')').css('opacity',speed/100);
    speed++;}
    ,20)
    }
    
    function hiddenpoem(){
    var speed=100;    
    hiddentimer=setInterval(function(){    
    if(speed<0){
            clearInterval(hiddentimer);
            index++;
            if(index<=8){
                showpoem();
                }
            else{
                index=0;
                showpoem();
                }    
        };   
    $('#poem p:eq('+index+')').css('opacity',speed/100);
    speed--;}
    ,20)
    }
    }
    
/*aboutme img上下浮动效果*/
    function Imgrolling(){
        $('.al-img').mouseenter(function(event){
            event.stopPropagation();
        var This=$(this),value=0,flag=false;
        var timer=setInterval(function(){
            $(This).find('img').css('margin-top',value+'px')
            value=value-10;
            if(value<-70){
                $(This).find('img').css('margin-top','70px');
                value=60;
                flag=true;
                }
            if(value==0&&flag==true){
                clearInterval(timer);
                flag=false;
                }
            },50)
    })
    }
/*skills页滑动隐现*/
    function Contentslide(){
        $('.skills-list-content img').click(function(){
        var display=$(this).nextAll('.hidden-content')
        if(display.css('display')=='none'){
        $('.hidden-content').slideUp(100);}
        $(this).nextAll('.hidden-content').slideToggle(500);
        });
        }
    
/*contactme页信息显示*/
     function Showmessage(){
		 $('#cm-message img').click(function(event){
			 $('#details').slideDown(100);
			 if($(this).attr('alt')=='qq'){
				 $('#details p:first').css('margin-top','0px');
				 }
			 else if($(this).attr('alt')=='weixin'){
				 $('#details p:first').css('margin-top','-30px');
				 }
			 else if($(this).attr('alt')=='email'){
				 $('#details p:first').css('margin-top','-60px');
				 }
			 event.stopPropagation();
			 })
		$('body').click(function(){
			$('#details').slideUp(100);
			})
		 
		 }

 /*自适应高度*/

function Fittingheight(){

var minH=$('.fullpage').css('min-height');

var number=/\d+/;

$('.fullpage').css({'padding-top':($('.fullpage').height()-number.exec(minH))/6});

} 

		
})