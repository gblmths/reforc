function voltarCad() {
    let email = cadastroProfessor.email.value;
    let nome = cadastroProfessor.nome.value;
    let senha = cadastroProfessor.Password.value;
    let cpf = cadastroProfessor.CPF.value;
    let forma = cadastroProfessor.forma.value;
    let estado = cadastroProfessor.estado.value;


    if (nome != "" || cpf != "" || forma != "" || senha != "" || email != "" || estado != "") {
        alert('Deseja realmente cancelar o cadastro?');
        window.location.href = "./index.html";
    }

}


function validaForm() {
    var email = cadastroProfessor.email.value;
    var nome = cadastroProfessor.nome.value;
    var senha = cadastroProfessor.Password.value;
    var cpf = cadastroProfessor.CPF.value;
    var forma = cadastroProfessor.forma.value;
    var estado = cadastroProfessor.estado.value;

    if (email == "") {
        alert("Por favor,Indique um e-mail.");
        cadastroProfessor.email.focus();
        return false;

    } else if (email.indexOf('@') == -1 || email.indexOf(".") == -1) {
        alert("Por favor,Indique um e-mail valido.");
        cadastroProfessor.email.focus();
        return false;

    } else if (nome == "" || nome.length < 3) {
        alert('Por favor, indique seu nome!');
        cadastroProfessor.nome.focus();
        return false;

    } else if (senha == "" || senha.length < 6) {
        alert("Por favor digitar uma senha de 6 ou mais digitos.");
        cadastroProfessor.Password.focus();
        return false;

    } else if (cpf == "" || cpf.length < 11) {
        alert("Por favor digite seu CPF completo.");
        cadastroProfessor.CPF.focus();
        return false;

    } else if (forma == "") {
        alert("Por favor diga sua Formação.");
        cadastroProfessor.forma.focus();
        return false;

    } else if (estado == "") {
        alert("Por favor diga seu estado.");
        cadastroProfessor.estado.focus();
        return false;

    } else if (nome != "" || cpf != "" || forma != "" || senha != "" || email != "" || estado != "") {
        alert('Deseja realmente cadastrar?');
        window.location.href = "./index.html";
    }



}