import {murcielago_encriptar} from "./claves/murcielago.js"

let input = document.getElementById("mensaje-entrada")
let output = document.getElementById("mensaje-salida")
let boton_traducir = document.querySelector(".boton-traducir")

/* Crear el evento para el boton traducir: obtener el input.value, traducir, y mostrar el mensaje en el div: */

boton_traducir.addEventListener("click", ()=>{
    let mensaje = input.value
    let salida = document.createTextNode(murcielago_encriptar(mensaje))
    output.appendChild(salida)
})