import {murcielago_encriptar, murcielago_desencriptar} from "./claves/murcielago.js"

let input = document.getElementById("mensaje-entrada")
let output = document.getElementById("mensaje-salida")
let boton_traducir = document.querySelector(".boton-traducir")
let boton_encriptar = document.getElementById("encriptar")

/* Crear el evento para el boton traducir: obtener el input.value, traducir, y mostrar el mensaje en el div: */

let encriptar = boton_encriptar.checked

boton_encriptar.addEventListener("onChange", ()=>{
    encriptar = !encriptar
    console.log("cambio de estado")
})

boton_traducir.addEventListener("click", ()=>{
    let mensaje = input.value
    if (encriptar){
        output.textContent = murcielago_encriptar(mensaje)
    }else{
        output.textContent = murcielago_desencriptar(mensaje)
    }
})