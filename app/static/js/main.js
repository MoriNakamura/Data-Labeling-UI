
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
