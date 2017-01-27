/* JavaScript */

/*
	This is just some sample code to show you how to use the
	filedata API and an event handler. Feel free to start fresh!
*/
function appendUl(append_to_id, ul_id) {
  var ul = document.createElement('ul');
  ul.id = ul_id;

  var appendTo = document.getElementById(append_to_id);
  appendTo.appendChild(ul);
}

function appendLiA(append_to_id, li_id, a_href, a_text) {
  var a = document.createElement('a');
  a.href = a_href;
  a.textContent = a_text;

  var li = document.createElement('li');
  li.id = li_id;
  li.appendChild(a);

  var appendTo = document.getElementById(append_to_id);
  appendTo.appendChild(li);
}


$("btn1").on("click", function()
{
    filedata.getFilesForPath("/", function(err, files)
    {
    	if(err)
    	{
    		$("pre").text("ERROR: "+JSON.stringify(err));
    	}
    	else
    	{
    		$("pre").text(JSON.stringify(files, null, "\t"));
    	}
    });
});


filedata.getFilesForPath("/", function(err, files)
{
	if(err)
	{
		$("pre").text("ERROR: "+JSON.stringify(err));
	}
	else
	{
		$("pre").text(JSON.stringify(files, null, "\t"));
	}
});
