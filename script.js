var qmax = 30;
var qatt = 0;

function display(){
	document.getElementById("vis").className = "hide";
	document.getElementById("cmax").className = "hide";
	document.getElementById("data").className = "";
	
}

function nascondi(){
	document.getElementById("vis").className = "";
	document.getElementById("cmax").className = "";
	document.getElementById("data").className = "hide";
}

function addItem(){
	var nome = document.getElementById("nome").value;
	var qta = document.getElementById("qta").value;
	if(nome == "" ||  qta == ""){
		return;
	}

	qta = parseInt(qta);
	if(qta==0){
		return;
	}

	if(qatt+qta>qmax){
		alert("Impossibile aggiungere l'elemento, viene superata la capacita' massima");
		return;
	}
	qatt+=qta;
	
	var tabella = document.getElementById("tabella").rows;
	var i;
	for (i=1; i<tabella[0].cells.length && i>-1; i++){
		if (tabella[0].cells.item(i).innerHTML == nome){
			var q = parseInt(tabella[1].cells.item(i).innerHTML);
			tabella[1].cells.item(i).innerHTML = q+qta;
			i=-1;
		}
	}
	if (i!=0){
		tabella[0].insertCell(-1).innerHTML = nome;
		tabella[1].insertCell(-1).innerHTML = qta;
	}
	nascondi();
	document.getElementById("nome").value = "";
	document.getElementById("qta").value = "";
}

function cambiaMax(){
	qmax= parseInt(document.getElementById("cmax").value);
	if(qatt>qmax){
		alert("Attenzione!! La capacita' massima e' stata impostata al di sotto della quantita' immagazzinata!!");
	}
}
