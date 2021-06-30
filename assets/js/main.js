$(function() {
    $( "#datepicker,#datepicker-1" ).datepicker();
});
$('.carousel-meal').owlCarousel({
    loop:true,
    rtl:true,
    margin:50,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
            
        },
        600:{
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
   
    }
});