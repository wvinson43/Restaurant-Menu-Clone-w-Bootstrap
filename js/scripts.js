$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
           if ($('#carouselButton').children('span').hasClass('fa-pause')) {
               $('#mycarousel').carousel('pause');
               $('#carouselButton').children('span').removeClass('fa-pause');
               $('#carouselButton').children('span').addClass('fa-play');
           }
           else if ($('#carouselButton').children('span').hasClass('fa-play')){
               $('#mycarousel').carousel('cycle');
               $('#carouselButton').children('span').removeClass('fa-play');
               $('#carouselButton').children('span').addClass('fa-pause');                    
           }
       });
});
$('#login').click(function(event1){
    $(loginModal).modal();
    return false;});
$(".close").on('click',function() { 
$('.modal-fade').modal('hide');

$('#reservetable').click(function(event2){
    $(reservetableModal).modal();
    return false;});
$(".close").on('click',function() { 
$('.modal-fade').modal('hide');
});

});