import {murcielago_encriptar, murcielago_desencriptar} from "./claves/murcielago.js"

let input = document.getElementById("mensaje-entrada")
let output = document.getElementById("mensaje-salida")
let boton_traducir = document.querySelector(".boton-traducir")
let boton_encriptar = document.getElementById("encriptar")

/* Crear el evento para el boton traducir: obtener el input.value, traducir, y mostrar el mensaje en el div: */

boton_traducir.addEventListener("click", ()=>{
    let mensaje = input.value
    if (boton_encriptar.checked){
        output.textContent = murcielago_encriptar(mensaje)
    }else{
        output.textContent = murcielago_desencriptar(mensaje)
    }
})