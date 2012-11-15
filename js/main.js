jQuery(function($) {
$( "#contacts" ).accordion();
$("#articles article").hover(
    function () {
        $(this).find("img").animate({
            height: '+=10px',
            width: '+=10px'
          },50)
    },
    function () {
        $(this).find("img").animate({
        height: '-=10px',
        width: '-=10px'
        },50)
    });
    //---------- hover on navigation
    $(".nav li .home").hover(
        function () {
            $(this).css('background-position', '-241px 0px');
            $(this).css('color', '#5a895e');
        },
        function () {
            $(this).css('background-position', '0px 0px');
            $(this).css('color', '#2c2829');
        });
    $(".nav li .info").hover(
        function () {
            $(this).css('background-position', '-241px -141px');
            $(this).css('color', '#5a895e');
        },
        function () {
            $(this).css('background-position', '0px -141px');
            $(this).css('color', '#2c2829');
        });
    $(".nav li .contacts").hover(
        function () {
            $(this).css('background-position', '-241px -282px');
            $(this).css('color', '#5a895e');
        },
        function () {
            $(this).css('background-position', '0px -282px');
            $(this).css('color', '#2c2829');
        });

});
