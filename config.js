let textArea = document.querySelector(".textArea");
let mensajeArea = document.querySelector(".mensajeArea");
let btencriptar = document.querySelector(".btencriptar");
let btdesencriptar = document.querySelector(".btdesencriptar");
let copiar = document.querySelector(".copiar");
let borrar = document.querySelector(".borrar");

function encriptar(texto) {
    let encriptado = texto;
    let diccionario = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    for (let clave in diccionario) {
        let regex = new RegExp(clave, 'g');
        encriptado = encriptado.replace(regex, diccionario[clave]);
    }
    return encriptado;
}

function desencriptar(texto) {
    let desencriptado = texto;
    let diccionario = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    for (let clave in diccionario) {
        let regex = new RegExp(clave, 'g');
        desencriptado = desencriptado.replace(regex, diccionario[clave]);
    }
    return desencriptado;
}

function handleClickBorrar() {
    textArea.value = "";
    mensajeArea.value = "";
}

function handleClickEncriptar() {
    let texto = textArea.value;
    let resultado = encriptar(texto);
    mensajeArea.value = resultado;
}

function handleClickCopiar() {
    mensajeArea.select();
    mensajeArea.setSelectionRange(0,99999); 
    document.execCommand("copy"); 
}

function handleClickDesencripar() {
    let mensaje= textArea.value;
    let resultado=desencriptar(mensaje);
    mensajeArea.value = resultado;
}

btencriptar.addEventListener("click", handleClickEncriptar);

copiar.addEventListener("click", handleClickCopiar);

btdesencriptar.addEventListener("click", handleClickDesencripar)

borrar.addEventListener("click", handleClickBorrar);

