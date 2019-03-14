
function relationCheck() {
    if (document.getElementById('smCheck').checked) {
        document.getElementById('smOutcome').style.display = 'block';
        document.getElementById('msOutcome').style.display = 'none';
        document.getElementById('mwOutcome').style.display = 'none';
        document.getElementById('case').style.display = 'block';
    }
	else if (document.getElementById('msCheck').checked) {
        document.getElementById('smOutcome').style.display = 'none';
        document.getElementById('msOutcome').style.display = 'block';
        document.getElementById('mwOutcome').style.display = 'none';
        document.getElementById('case').style.display = 'block';
    }
    else if (document.getElementById('mwCheck').checked) {
        document.getElementById('smOutcome').style.display = 'none';
        document.getElementById('msOutcome').style.display = 'none';
        document.getElementById('mwOutcome').style.display = 'block';
        document.getElementById('case').style.display = 'block';
    }
    else {
    	document.getElementById('smOutcome').style.display = 'none';
        document.getElementById('msOutcome').style.display = 'none';
        document.getElementById('mwOutcome').style.display = 'none';
        document.getElementById('case').style.display = 'none';
    }
}

$(document).ready(function(){
	$.get('getdata', function(data) {
		$('#labeling_id').text('Text '+data._id);
		$('#labeling_text').html(data.text);
		$('#submit_id').val(data._id);
	});
});

$('#labelForm').submit(function(event) {
	alert('lalala')
	event.preventDefault();
	var data = $(this).serialize();
	

	$.post('/submit', data, function(response) {
		$('#labeling_id').text('Text '+response._id);
		$('#labeling_text').html(response.text);
		$('#submit_id').val(response._id);
	});
});

// window.addEventListener("load", function() {
// 	var XHR = new XMLHttpRequest();

// 	XHR.onreadystatechange = function() {
//     	if (XHR.readyState == XMLHttpRequest.DONE) {
//     		if(xhr.getResponseHeader('content-type')==='application/json'){
// 	        	var result = JSON.parse(xhr.responseText);
// 	        	console.log(result);
// 	        }
//     	}
//     }

// 	XHR.open("GET", "http://192.168.2.108:5000/getdata");
// 	XHR.send(null);
// });

// function sendLabelAndNext() {
// 	var xhr = new XMLHttpRequest();

// }

// document.getElementById('labelForm').addEventListener('submit', function(evt) {
// 	evt.preventDefault();
//     var XHR = new XMLHttpRequest();

//     XHR.onreadystatechange = function() {
//     	if (XHR.readyState == XMLHttpRequest.DONE) {
//     		if(xhr.getResponseHeader('content-type')==='application/json'){
// 	        	var result = JSON.parse(xhr.responseText);
// 	        	console.log(result);
//     	}
//     }

//     // Bind the FormData object and the form element
//     var FD = new FormData(form);

//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       alert(event.target.responseText);
//     });

//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oops! Something went wrong.');
//     });

//     // Set up our request
//     XHR.open("POST", "http://192.168.2.108:5000/submit");

//     // The data sent is what the user provided in the form
//     XHR.send(FD);
//   }
 
//   // Access the form element...
// });