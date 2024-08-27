const cripitografar_texto = document.querySelector(".texto_codificar");
const mensagem = document.querySelector(".mensagem");

function botao_encriptar() {
    const textoEncriptado = encriptar(cripitografar_texto.value);
    mensagem.value = textoEncriptado;
    cripitografar_texto.value = "";
    removerImagem(); 
    verificarTexto(); 
}

function botao_desencriptar() {
    const textoDesencriptado = desencriptar(cripitografar_texto.value);
    mensagem.value = textoDesencriptado;
    cripitografar_texto.value = "";
    removerImagem(); 
    verificarTexto(); 
}

function encriptar(Encriptar) {
    let mudar_texto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    Encriptar = Encriptar.toLowerCase();

    for (let i = 0; i < mudar_texto.length; i++) {
        if (Encriptar.includes(mudar_texto[i][0])) {
            Encriptar = Encriptar.replaceAll(mudar_texto[i][0], mudar_texto[i][1]);
        }
    }

    return Encriptar;
}

function desencriptar (Desencriptar) {
    let mudar_texto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    Desencriptar = Desencriptar.toLowerCase();

    for (let i = 0; i < mudar_texto.length; i++) {
        if (Desencriptar.includes(mudar_texto[i][1])) {
            Desencriptar = Desencriptar.replaceAll(mudar_texto[i][1], mudar_texto[i][0]);
        }
    }

    return Desencriptar;
}

function copiarTexto() {
    const textoCopiar = mensagem.value;
    navigator.clipboard.writeText(textoCopiar);
}

cripitografar_texto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botao_encriptar();
        removerImagem(); 
        verificarTexto(); 
    }
});

mensagem.addEventListener("input", verificarTexto);