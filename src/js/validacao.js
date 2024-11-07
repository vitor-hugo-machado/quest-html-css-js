const form = document.getElementsByClassName("formulario")[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e)
    if (checarInputs()) {
        form.submit();
    }
});

function checarInputs() {
    let isValid = true;

    if (!validarNome()) isValid = false;
    if (!validarEmail()) isValid = false;
    if (!validarTelefone()) isValid = false;
    if (!validarMensagem()) isValid = false;

    return isValid;
}



function validarNome() {
    const inputNome = document.querySelector(".input-nome");
    const erroNome = document.querySelector(".nome-required");
    if (inputNome.value === "") {
        erroNome.classList.add("mostrar");
        inputNome.classList.add("input-invalido");
        return false;
    } else {
        erroNome.classList.remove("mostrar");
        inputNome.classList.remove("input-invalido");
        return true;

    }
}

function validarEmail() {
    const inputEmail = document.querySelector(".input-email");
    const erroEmail = document.querySelector(".email-required");
    if (inputEmail.value === "") {
        erroEmail.classList.add("mostrar")
        inputEmail.classList.add("input-invalido")
        return false;
    } else {
        erroEmail.classList.remove("mostrar");
        inputEmail.classList.remove("input-invalido");
        return true;
    }
}

function validarTelefone() {
    const inputTelefone = document.querySelector(".input-telefone");
    const erroTelefone = document.querySelector(".telefone-required");
    if (inputTelefone.value === "") {
        erroTelefone.classList.add("mostrar")
        inputTelefone.classList.add("input-invalido")
        return false;
    } else {
        erroTelefone.classList.remove("mostrar");
        inputTelefone.classList.remove("input-invalido");
        return true;
    }
}

function validarMensagem() {
    const textArea = document.querySelector(".textarea");
    const erroMensagem = document.querySelector(".mensagem-required");
    if (textArea.value === "") {
        erroMensagem.classList.add("mostrar")
        textArea.classList.add("input-invalido")
        return false;
    } else {
        erroMensagem.classList.remove("mostrar");
        textArea.classList.remove("input-invalido");
        return true;
    }
}
