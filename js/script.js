
function input_value(command) {	
	var r = document.getElementById("res")

	//remove start char "0"
	r.innerHTML = r.innerHTML.replace(/^[0]+/, "");
	
	if (command == '=') {		
		r.innerHTML = eval (r.innerHTML);		
	} 
	else {		
		r.innerHTML += command;
	}	
}

function clean() {	
	var r = document.getElementById("res")
	r.innerHTML="0";
}


//var res = document.getElementById("res");
////res.style.color='blue';


