// Campos de texto
const inputEntrada = document.getElementById("inputEntrada");
const inputSalida = document.getElementById("inputSalida");

// Botones
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");

// Encontrado | No encontrado
const encontrado = document.getElementById("encontrado");
const noEncontrado = document.getElementById("noEncontrado");

// Alertas 
const textoInvalido = document.getElementById("textoInvalido");
const textoValido = document.getElementById("textoValido");

// Toma el contenido del input de entrada
let texto = "";

// Evento click
btnEncriptar.addEventListener("click", () => {
    verificarTexto()
    if(verificarTexto() === true) {
        encriptarTexto();
    }
})

btnCopiar.addEventListener("click", () => {
    copiarTexto();
})

btnDesencriptar.addEventListener("click", () => {
    inputSalida.value = tomarInputConValor().toLowerCase();
})


// Funciones
function verificarTexto() {
    let texto = inputEntrada.value;
    let textoSeparado = texto.split("");

    if(textoSeparado.length > 0) {
        for (let i = 0; i < textoSeparado.length; i++) {   
            if(textoSeparado[i] === "á" || textoSeparado[i] === "é" || textoSeparado[i] === "í" || textoSeparado[i] === "ó" || textoSeparado[i] === "ú") {
                textoInvalido.classList.add("invalido");
                setTimeout(() => {
                    textoInvalido.classList.remove("invalido");
                }, 2000);
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function encriptarTexto() { 
    texto = inputEntrada.value;
    let textoSeparado = texto.split("");
    
    for (let i = 0; i < textoSeparado.length; i++) { 
        if(textoSeparado[i] === "a" || textoSeparado[i] === "A") {
            textoSeparado[i] = "ai";
        } else if(textoSeparado[i] === "e" || textoSeparado[i] === "E") {
            textoSeparado[i] = "enter";
            
        } else if(textoSeparado[i] === "i" || textoSeparado[i] === "I") {
            textoSeparado[i] = "imes";
            
        } else if(textoSeparado[i] === "o" || textoSeparado[i] === "O") {
            textoSeparado[i] = "ober";
            
        } else if(textoSeparado[i] === "u" || textoSeparado[i] === "U") {
            textoSeparado[i] = "ufat";
        }
    }
    
    let textoEncriptado = textoSeparado.join("");
    
    AgregarQuitarCampoDesencriptar();
    tomarInputConValor();
    inputEntrada.value = "";
    inputSalida.value = textoEncriptado;
    btnEncriptar.href = "#inputSalida";
}
    // Guarda el contenido del input de entrada antes de que éste sea ""
function tomarInputConValor() {
    return texto;
}

function copiarTexto() {
    if(inputSalida.value !== "") {
        navigator.clipboard.writeText(inputSalida.value);
        textoValido.style.display = "flex";
        texto = "";
        inputSalida.value = "";
        AgregarQuitarCampoDesencriptar();
        setTimeout(() => {
            textoValido.style.display = "none";
        }, 2000);
    }
}

function AgregarQuitarCampoDesencriptar() {
    if (noEncontrado.style.display === "flex" && encontrado.style.display === "none") {
        noEncontrado.style.display = "none";
        encontrado.style.display = "flex";
    } else {
        noEncontrado.style.display = "flex";
        encontrado.style.display = "none";
    }
}