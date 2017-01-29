$('#normal').mouseover(function(){
    $(this).stop().effect('shake', {distance:3}, 200);
});


/**
 * When you use the combination "hover" and "shake in effects",
 * they shake continuously on Firefox.
 * To avoid it, add "animated" class
 * and check if the element is animating.
 */
$('#knack').hover(function(){
    if(!$(this).hasClass('animated')){
        $(this).addClass('animated');
        $(this).stop().effect('shake', {distance:3}, 200);
    }
}, function(){
    $(this).removeClass('animated');
});
