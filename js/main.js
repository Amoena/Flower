jQuery(function($) {
$( "#contacts" ).accordion();
$(".header .nav .info").click(function(){

    var ContLoader = new reqObj.ContentLoader("/Flowers/SomeInfo.txt",answerToInfo);
});
});

//--------
