
var teste = 1;

function mudarCores() {
	if (teste == 1){
		document.getElementById("cabecalho").style.background = "black";
		document.getElementById("conteudo").style.background = "red";
		document.getElementById("rodape").style.background = "black";
		teste = 0;
	} else{
		document.getElementById("cabecalho").style.background = "red";
		document.getElementById("conteudo").style.background = "black";
		document.getElementById("rodape").style.background = "red";
		teste = 1;
	}
}
