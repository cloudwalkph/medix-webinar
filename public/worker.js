var i = 0;

function timedCount() {
    i = i + 1;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       postMessage(xhttp.responseText);
	    }
	};
	xhttp.open("GET", '/api/v1/course/1/messages', true);
	xhttp.send();
    
    setTimeout("timedCount()",3000);
}

timedCount();