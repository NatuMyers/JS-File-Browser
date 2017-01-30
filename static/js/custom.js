// go up a directory
function goUp() {
  var directory = current_payload.split('/'); // http://stackoverflow.com/questions/5269856/how-to-split-comma-separated-string-using-javascript
  // Basically cut off the last part of the array to go up a directory.
  if (directory.length >= 1) { // else, it's the root directory anyway.
    var new_payload = current_payload.replace(directory[directory.length - 1], ''); // remove the last filename
  }
    // now GO.
    window.location.href = new_payload; // http://stackoverflow.com/questions/1226714/how-to-get-browser-to-navigate-to-url-in-javascript
}

// go in a directory
function goDeeper(foldername) { // ex: Documents. just the directory or foldername

  var target = "/" + (window.location.hash + foldername).replace('#','')
  console.log(target)
  filedata.getFilesForPath(target, renderView(target))
  // window.location.href = "#" + new_payload;
}

// go in a directory
function goView(filename) {
  // Append to the end of the current payload
  var new_payload = ""
   new_payload = current_payload.concat("/"+foldername);
  // now GO.
  window.location.href = window.location.hostname + new_payload; // http://stackoverflow.com/questions/1226714/how-to-get-browser-to-navigate-to-url-in-javascript

  current_payload = new_payload // directory update!
  console.log("Current Payload: " + current_payload); // for debug
}
