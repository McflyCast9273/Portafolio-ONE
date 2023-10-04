function encriptar() {
    var textoOriginal = document.getElementById("texto").value.toLowerCase();
    var textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                       .replace(/i/g, "imes")
                                       .replace(/a/g, "ai")
                                       .replace(/o/g, "ober")
                                       .replace(/u/g, "ufat");

    document.getElementById("resultado-texto").textContent = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value.toLowerCase();
    var textoOriginal = textoEncriptado.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");

    document.getElementById("resultado-texto").textContent = textoOriginal;
}

function copiarTexto() {
    var resultado = document.getElementById("resultado-texto").textContent;
    var textarea = document.createElement("textarea");
    textarea.value = resultado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado al portapapeles");
}
