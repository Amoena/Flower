jQuery(function($) {
$( "#contacts" ).accordion();
$("#articles img").hover(
    function () {
        $(this).animate({
            height: '+=10px',
            width: '+=10px'
          },50)
    },
    function () {
        $(this).animate({
        height: '-=10px',
        width: '-=10px'
        },50)
    });
});
