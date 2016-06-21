/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     chenzhenyang
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/

function centerLoader(el) {
	 if(el){

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW =el.outerWidth();
            var spinnerH = el.outerHeight();

            el.css({
                'position':'fixed',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });
	}
 }

function FakeLoader(opts){
	var childNodes = $('body').children();
	if(childNodes.length>0){
		var dom = $('<div class="fakeloader"></div>');
		var dom2 = $(childNodes[0]);
		dom.insertBefore(dom2);
	}else{
		$('body').append('<div class="fakeloader"></div>');
	}
	
	var dom = $('body').find(".fakeloader");
	this.$element = dom;
	this.$settings = $.extend({
            timeToHide:-1, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
			right:'0px',
			bottom:'0px',
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '9999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
			border_radius: '5px',
			numberHideTimes:0,//调用hide多少次，才会隐藏
            imagePath:'' // Default Path custom image
        }, opts);
	var settings = this.$settings;
	//Customized Spinners
    var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
    var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
    var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
    var spinner04 = '<div class="fl spinner4"></div>'; 
    var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
    var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
    var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 
		
	 //Init styles
    var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left,
			'right':settings.right,
			'bottom':settings.bottom,
			'border-radius': settings.border_radius,
			'margin':'auto'
    };
	
	var el = this.$element;
	el.css(initStyles);
	
	//Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image
                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
					var ele = el.find(".fl");
                    centerLoader(ele);
                }
        });
		
		
		//Time to hide fakeLoader
		if(settings.timeToHide!=-1){
			setTimeout(function(){
				this.$settings.numberHideTimes==0;
				$(el).fadeOut();
			}, settings.timeToHide);
		}
		
		var ele = el.find(".fl");
		$(window).load(function(){
                centerLoader(ele);
              $(window).resize(function(){
                centerLoader(ele);
              });
        });
}

 

FakeLoader.prototype = {
	hide : function(){
		var numberHideTimes = this.$settings.numberHideTimes;
		
		if(numberHideTimes==0){
			this.$element.fadeOut();
		}else if(numberHideTimes<0){
			this.$settings.numberHideTimes==0;
		}else{
			this.$settings.numberHideTimes--;
		}
	},
	mask : function(){
		var numberHideTimes = this.$settings.numberHideTimes;
		if(numberHideTimes>0){
			this.$settings.numberHideTimes++;
			return;
		}
		
		var el = this.$element;
		var fl = el.find(".fl");
		$(window).load(function(){
                centerLoader(fl);
              $(window).resize(function(){
                centerLoader(fl);
              });
        });
		
		el.css({
			'backgroundColor':this.$settings.bgColor,
            'zIndex':this.$settings.zIndex
		});
			
		el.fadeIn();
	}
}




