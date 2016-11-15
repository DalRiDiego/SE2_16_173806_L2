function display(){
	document.getElementById("vis").className = "hide";
	document.getElementById("data").className = "";
}

function nascondi(){
	document.getElementById("vis").className = "";
	document.getElementById("data").className = "hide";
}

function addItem(){
	var nome = document.getElementById("nome").value;
	var qta = document.getElementById("qta").value;
	if(nome == "" ||  qta == ""){
		return;
	}
	
	qta = parseInt(qta);
	var tabella = document.getElementById("tabella").rows;
	var i;
	for (i=0; i<tabella[0].cells.length && i>-1; i++){
		if (tabella[0].cells.item(i).innerHTML == nome){
			var q = parseInt(tabella[1].cells.item(i).innerHTML);
			tabella[1].cells.item(i).innerHTML = q+qta;
			i=-2;
		}
	}
	if (i!=-1){
		tabella[0].insertCell(-1).innerHTML = nome;
		tabella[1].insertCell(-1).innerHTML = qta;
	}
	nascondi();
	document.getElementById("nome").value = "";
	document.getElementById("qta").value = "";
}
