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


function goUp() {
  var directory = payload.split('/'); // http://stackoverflow.com/questions/5269856/how-to-split-comma-separated-string-using-javascript
  // Basically cut off the last part of the array to go up a directory.

  if (directory.length >= 1) { // else, it's the root directory anyway.
    var payload = payload.replace(directory[directory.length - 1], '');
  }

    window.location.href = "payload="+payload; // http://stackoverflow.com/questions/1226714/how-to-get-browser-to-navigate-to-url-in-javascript
}
