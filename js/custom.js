// customized js file
 
 $(document).ready(function() {
      
            'use strict';
             // variables
              var $isAnimatedFirst = $('.home .is-animated'),
                  $isAnimatedSecond = $('.about .is-animated'),
                  $isAnimatedSecondSingle = $('.about .is-animated__single'),
                  $isAnimatedThird = $('.third .is-animated'),
                  $isAnimatedThirdSingle = $('.third .is-animated__single'),
                  $isAnimatedFourth = $('.fourth .is-animated'),
                  $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
                  $isAnimatedPara = $('p.is-animated'),
                  $isAnimatedTitle = $('.title.is-animated');
                  $isAnimatedFirst.addClass('animated fadeInUp').css('animation-delay', '.3s');
            

              // initialize fullPage
            $('#fullpage').fullpage({
              sectionsColor: ['#000', '#fff', '#7BAABE', '#c46cca', '#ccddff', '#c46cca', '#4BBFC3','#1bbc9b'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
              menu: '#menu',
              
              onLeave: function(index, nextIndex, direction) {
                                  
                    
                    $isAnimatedTitle.addClass('animated fadeIn').css('animation-delay', '1.5s');
                    $isAnimatedPara.addClass('animated zoomIn').css('animation-delay', '1.7s');
                  /**
                  * use the following condition: 
                  *
                  *   if( index == 1 && direction == 'down' ) {
                  *
                  * if you haven't enabled the dot navigation
                  * or you aren't interested in the animations that occur 
                  * when you jump (using the dot navigation) 
                  * from the first section to another sections 
                  */

                  // first animation
                                  
                  if( index == 1 && nextIndex == 2 ) { 
                    $isAnimatedSecondSingle.addClass('animated fadeInDownBig').css('animation-delay', '.6s');   
                  }

                /**
                  * use the following condition: 
                  *
                  *   else if( index == 2 && direction == 'down' ) {
                  *
                  * if you haven't enabled the dot navigation
                  * or you aren't interested in the animations that occur 
                  * when you jump (using the dot navigation) from the first section to the third one 
                  */

                  // second animation
                  else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                    $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
                    $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
                    $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
                  }


                 /**
                  * use the following condition:
                  *
                  *   else if( index == 3 && direction == 'down' ) {
                  *
                  * if you haven't enabled the dot navigation
                  * or you aren't interested in the animations that occur 
                  * when you jump (using the dot navigation) 
                  * from the first or second section to the fourth one 
                  */

                  // third animation
                  else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                    $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
                    $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
                    $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                      $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
                    });
                  }
                }
                
            });
            
//          maintain window height depend screen
     
            var h = window.innerHeight;
            var k = 123;
            if($('.fp-tableCell').parent().is('.home')){
              $('.home').children('.fp-tableCell').css("display","block");
              $('.fp-tableCell').height(h-k); 
              $('article').height(h-k);    
            };
     
     
     
//          maintain window height depend screen     
            
            $('.single-item').slick({
                autoplay:true,
                dots:false,
                arrows:false
            });
            $('.single-item').on('init', function(){
                alert(1);
                $("article h1").addClass("animated zoomIn");
                $("article p").addClass("animated fadeInLeft");
                $("article a").addClass("animated fadeInUp");
             });
              $('.single-item').on('beforeChange', function(){
                        $("article h1").removeClass("animated zoomIn");
                        $("article p").removeClass("animated fadeInLeft");
                        $("article a").removeClass("animated fadeInUp");
             });
            $('.single-item').on('afterChange', function(){
                        $("article h1").addClass("animated zoomIn");
                        $("article p").addClass("animated fadeInLeft");
                        $("article a").addClass("animated fadeInUp");
             });
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
     

     
     
        });