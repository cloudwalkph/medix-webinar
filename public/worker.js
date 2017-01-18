var i = 0;

function timedCount() {
    i = i + 1;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       postMessage(xhttp.responseText);
	    }
	};
	xhttp.open("GET", 'http://192.168.1.52:8000/api/v1/course/1/messages?flag=0', true);
	xhttp.send();
    
    setTimeout("timedCount()",3000);
}

timedCount();