
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

function getData() {
	xmlhttp= new XMLHttpRequet();
	
}

function sendLabelAndNext() {

}