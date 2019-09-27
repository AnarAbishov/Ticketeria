
$(document).ready(function() {


    $('.owl-carousel').owlCarousel({
        loop:true,
       
        nav:true,
        responsiveClass:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })


});


// $('.Redact').click(function() {
//     $( "input" ).prop( "disabled", false );
//     $('.Cancel').addClass('active').removeClass('none');
// });

// $('.Cancel').click(function() {
//     $('.Cancel').addClass('none');
//     $( "input" ).prop( "disabled", true );
// });
