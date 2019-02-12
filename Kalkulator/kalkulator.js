var newdigit = true;var op;var temp;
function Angka(angka){
	if(newdigit){     
	    newdigit = false;     
	}
	else{
	    angka = document.getElementById("display").value + angka;
	}
	document.getElementById("display").value=angka;
}
function Operator(opt){    
	if(temp){
	    Hitung();
	}
	temp = document.getElementById("display").value;
	document.getElementById("display").value = opt;
	op = opt;
	newdigit=true;
}
function Hitung(){
	var angka = document.getElementById("display").value;
	if(op == '*'){
	    temp = temp * angka;
	}
	else if(op == '/'){
	    temp = temp / angka;
	}
	else if(op == '+'){
	    temp = parseInt(temp) + parseInt(angka);
	}
	else if(op == '-'){
	    temp = temp - angka;
	}
	document.getElementById("display").value = temp;
	temp = 0;
}