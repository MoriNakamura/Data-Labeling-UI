
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
		$('#labelingID').text('Text '+data._id);
		$('#labelingText').html(data.text);
		$('#submitID').val(data._id);
	});

	$('#submitButton').on('click', function() {
		if ($("#smCheck").is(':checked') && !($("input[name='outcome_symptom_medicine']:checked").val())) {
			alert('Please select one outcome!');
		}
		else if ($("#msCheck").is(':checked') && !($("input[name='outcome_medicine_side']:checked").val())) {
			alert('Please select one outcome!');
		}
		else if ($("#mwCheck").is(':checked') && !($("input[name='outcome_medicine_withdrawal']:checked").val())) {
			alert('Please select one outcome!');
		}
		else {
			$.post('submit', $('form#labelForm').serialize(), function(data) {
		        $('#labelingID').text('Text '+data._id);
				$('#labelingText').html(data.text);
				$('#submitID').val(data._id);
				$('input[name="relation"]').prop('checked', false);
				$('input[name="outcome_symptom_medicine"]').prop('checked', false);
				$('input[name="outcome_medicine_side"]').prop('checked', false);
				$('input[name="outcome_medicine_withdrawal"]').prop('checked', false);
				$('input[name="case"]').prop('checked', false);
				$('input#caseDefaultRadio').prop('checked', true);
				relationCheck();
		       },
		       'json' // I expect a JSON response
		    );
		}
	});

});

// $('#labelForm').submit(function(event) {
// 	alert('lalala')
// 	event.preventDefault();
// 	var data = $(this).serialize();
	

// 	$.post('/submit', data, function(response) {
// 		$('#labelingID').text('Text '+response._id);
// 		$('#labelingText').html(response.text);
// 		$('#submitID').val(response._id);
// 	});
// });

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