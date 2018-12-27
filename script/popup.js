$(function(){
    let $popup = $('.popup'),
        $content = $('.popup .popup-content'),
        $p1 = $content.find('.pop-img1'),
        $p2 = $content.find('.pop-img2'),
        $p3 = $content.find('.pop-img3'),
        $c1 = $('.content-main ul li:nth-child(1) a'),
        $c2 = $('.content-main ul li:nth-child(2) a'),
        $c3 = $('.content-main ul li:nth-child(3) a');
 
        
    $c1.on('click', function(event){
        event.preventDefault();
           $popup.css('display','block');
           $p1.css('display','block');
           $p2.css('display','none');
           $p3.css('display','none');
       });
     $c2.on('click', function(event){
            event.preventDefault();
           $popup.css('display','block');
           $p2.css('display','block');
           $p1.css('display','none');
           $p3.css('display','none');
       });
     $c3.on('click', function(event){
            event.preventDefault();
           $popup.css('display','block');
           $p3.css('display','block');
           $p1.css('display','none');
           $p2.css('display','none');
       });
    $popup.find('button').on('click',function(){
        $popup.css('display','none');
        $content.find('> div').css('display','none');
    });
    
});