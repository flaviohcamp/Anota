function validateEmail(x) {
    var re = /\S+@\S+\.\S+/;
    return re.test(x);
}
function entrar(){
    var email = document.getElementById("email");
    emailVal= email.value;
    var senha = document.getElementById("senha");
    senhaVal= senha.value;
        if (validateEmail(emailVal) === true) {
            document.location.href ="cadastro.html";
        }else{alert("Por favor entre com um Email Valido.")}
}

document.getElementById("btn").addEventListener("click", entrar);
