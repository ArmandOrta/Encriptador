let textarea = document.querySelector(".presentacion__contenido__input");
let mensaje = document.getElementById("outputText");
let placeholderImage = document.getElementById("placeholderImage");
let copyButton = document.getElementById("copyButton");

/* Llaves de encriptación
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptacion(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function encriptar() {
    const texto = textarea.value.trim();
    const txEncriptado = encriptacion(texto);

    if (texto === '') {
        placeholderImage.style.display = 'block';
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        mensaje.textContent = txEncriptado;
        copyButton.style.display = 'block';
    }

    textarea.value = "";
}

function copiar() {
    navigator.clipboard.writeText(mensaje.textContent)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.log('Algo salió mal al copiar el texto: ', err);
        });
}


function desencriptar()
{
    const txDesencriptado = desencriptacion(textarea.value);
    mensaje.value = txDesencriptado;
    textarea.value = "";    
}

function copiar()
{
    const txCopia = (mensaje.value);
    textarea.value = txCopia;
    mensaje.value = "";
    
}

function encriptacion(stringEncriptado)
{
    let encriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]; 
        
    stringEncriptado = stringEncriptado.toLowerCase();
       

    for(let i = 0; i < encriptador.length; i++)
    {
          if(stringEncriptado.includes(encriptador[i][0]))
          {
            stringEncriptado = stringEncriptado.replaceAll(encriptador[i][0], encriptador[i][1])
          }
    }
    return stringEncriptado;
}

function desencriptacion(stringDesencriptado)
{
    let encriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]; 
        
    stringDesencriptado = stringDesencriptado.toLowerCase();
       

    for(let i = 0; i < encriptador.length; i++)
    {
          if(stringDesencriptado.includes(encriptador[i][1]))
          {
            stringDesencriptado = stringDesencriptado.replaceAll(encriptador[i][1],encriptador[i][0])
          }
    }
    return stringDesencriptado;
}

