
class Usuario {
    constructor(nome, idade, skills) { 
        this.nome = nome, 
        this.idade = idade, 
        this.skills = skills
    }
};

const form = document.querySelector(".formulario");
const txt_usuarios = document.querySelector(".usuarios");
const erro = document.querySelector('.alerta');  
 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = iniciarAtributos();  

    if (usuario.nome == '' || usuario.idade == '' || usuario.skills == '') {  
        erro.innerHTML = `<p>Preencha todos os campos!</p>`;        
    } else {      
        txt_usuarios.innerHTML += 
            `<div class="usuarios">
                <p>
                    <span>Nome</span> ${usuario.nome} <br>
                    <span>Idade</span><span class="idade"> ${usuario.idade}</span> <br>
                    <span>Skills</span> ${usuario.skills} <br>
                </p>
            </div>`;

        limparCampos();
    } 
 
});

function iniciarAtributos() { 
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const skills = document.querySelector("#skills").value;

    return new Usuario(nome, idade, skills) ;
}

function limparCampos() {
    erro.innerHTML = '';
    document.querySelector("#nome").value = '';
    document.querySelector("#idade").value = '';
    document.querySelector("#skills").value = '';
    document.querySelector("#skills").value = '';
}