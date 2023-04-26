function encriptarTexto(){
    var textoLimpio = document.getElementById("textToEncritp").value;
    var textoEncriptado = textoLimpio;
    textoEncriptado = textoEncriptado.replace(/a/g,"ai");
    textoEncriptado = textoEncriptado.replace(/e/g,"enter");
    textoEncriptado = textoEncriptado.replace(/i/g,"imes");
    textoEncriptado = textoEncriptado.replace(/o/g,"ober");
    textoEncriptado = textoEncriptado.replace(/u/g,"ufat");
    textoEncriptado = "<span>Este es el texto encriptado: </span>" + textoEncriptado;
    document.getElementById("textoCript").innerHTML = textoEncriptado;
}

º