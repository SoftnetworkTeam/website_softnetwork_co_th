/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    $('a#go-to-glpro').click(function(){
        $('html,body').animate({scrollTop: $('#glpro').offset().top},1000);
    });
    $('a#go-to-hppro').click(function(){
        $('html,body').animate({scrollTop: $('#hppro').offset().top},1000);
    });
    $('a#go-to-svpro').click(function(){
        $('html,body').animate({scrollTop: $('#svpro').offset().top},1000);
    });
    $('a#go-to-loan').click(function(){
        $('html,body').animate({scrollTop: $('#loan').offset().top},1000);
    });
    $('a#go-to-payroll').click(function(){
        $('html,body').animate({scrollTop: $('#payroll').offset().top},1000);
    });
    $('a#go-to-regpro').click(function(){
        $('html,body').animate({scrollTop: $('#regpro').offset().top},1000);
    });
    $('a#go-to-inventory').click(function(){
        $('html,body').animate({scrollTop: $('#inventory').offset().top},1000);
    });

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
