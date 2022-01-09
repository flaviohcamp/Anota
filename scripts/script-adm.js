function sair(){
    document.location.href ="index.html";
}
function cadastrarAluno(){
   var CA = document.getElementById("cadastro-container");
   CA.innerHTML = "";

    
}

function cadastrarNotas(){
    
}







document.getElementById("sair").addEventListener("click", sair)
document.getElementById("cA").addEventListener("click", cadastrarAluno)
document.getElementById("cN").addEventListener("click", cadastrarNotas)