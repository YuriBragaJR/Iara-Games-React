// CADASTRO DE NOVO USUÁRIO

function testarCadastro() {
    const nome = document.getElementById("nomeCadastro").value;
    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senha").value;
    const confirma = document.getElementById("confirmaSenha").value;

    const regex = /^(?=.*[A-Z])(?=.*[\W]).{8,}$/;

    if (!regex.test(senha)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, um caractere especial e ter no mínimo 8 caracteres.");
        return false;
    }

    if (senha !== confirma) {
        alert("As senhas não coincidem!");
        return false;
    }

    const novoUsuario = { nome, email, senha };

    let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

    const jaExiste = usuarios.some(u => u.email === email);
    if (jaExiste) {
        alert("Este email já está cadastrado.");
        return false;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));
    localStorage.setItem("usuarioAtivo", JSON.stringify({ nome, email }));

    alert(`Cadastro e login bem-sucedido! Bem-vindo(a), ${nome.split(" ").slice(0, 2).join(" ")}!`);
    window.location.href = "https://yuribragajr.github.io/FIAP-Atv-4-interaction/index.html";
    return false;
}

// LOGIN DE USUÁRIO

function realizarLogin() {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("password").value;

    const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuarioEncontrado) {
        alert("Email ou senha incorretos, ou usuário não cadastrado.");
        return false;
    }

    localStorage.setItem("usuarioAtivo", JSON.stringify({ nome: usuarioEncontrado.nome, email }));
    alert(`Login bem-sucedido! Bem-vindo de volta, ${usuarioEncontrado.nome.split(" ").slice(0, 2).join(" ")}!`);
    window.location.href = "https://yuribragajr.github.io/FIAP-Atv-4-interaction/index.html";
    return false;
}


// LOGOUT

function logout() {
    localStorage.removeItem("usuarioAtivo");
    window.location.reload();
}

// EXIBIR NOME DO USUÁRIO NA PÁGINA

function exibirNomeUsuario() {
    const usuario = JSON.parse(localStorage.getItem("usuarioAtivo"));
    if (usuario) {
        const partesNome = usuario.nome.trim().split(" ");
        const primeiroEUltimo = `${partesNome[0]} ${partesNome[partesNome.length - 1]}`;

        const nomeHeader = document.getElementById("nomeHeader");
        const nomeUsuario = document.getElementById("nomeUsuario");
        const nomeBoasVindas = document.getElementById("nome-usuario-logado");
        const menuUsuario = document.getElementById("menuUsuario");
        const menuVisitante = document.getElementById("menuVisitante");

        if (nomeHeader) nomeHeader.textContent = primeiroEUltimo;
        if (nomeUsuario) nomeUsuario.textContent = primeiroEUltimo;
        if (nomeBoasVindas) nomeBoasVindas.textContent = primeiroEUltimo;

        if (menuUsuario) menuUsuario.style.display = "block";
        if (menuVisitante) menuVisitante.style.display = "none";
    } else {
        if (document.getElementById("menuUsuario")) document.getElementById("menuUsuario").style.display = "none";
        if (document.getElementById("menuVisitante")) document.getElementById("menuVisitante").style.display = "block";
    }
}

// EXECUTA QUANDO A PÁGINA CARREGAR

window.addEventListener("DOMContentLoaded", exibirNomeUsuario);