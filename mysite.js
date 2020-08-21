$(function(){
    $('.chang-btn').click(function(){

        var $displaySlide = $('.active');

        $displaySlide.removeClass('active');

        if ($(this).hasClass('next-btn')){
            $displaySlide.next().addClass('active'); 
        } else {
            $displaySlide.prev().addClass('active');
        }

        var slideIndex = $('.slide').index($('.active'));
        $('.chang-btn').show();

        if (slideIndex==0){
            $('.prev-btn').hide();
        } else if(slideIndex==3){
            $('.next-btn').hide();
        }
        });
});