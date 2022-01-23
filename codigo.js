import {murcielago_encriptar, murcielago_desencriptar} from "./claves/murcielago.js"
import {paquidermo_encriptar, paquidermo_desencriptar} from "./claves/paquidermo"

let input = document.getElementById("mensaje-entrada")
let output = document.getElementById("mensaje-salida")
let boton_traducir = document.querySelector(".boton-traducir")
let boton_encriptar = document.getElementById("encriptar")
let etiqueta_desencriptar = document.querySelector(".etiqueta-desencriptar")
let etiqueta_encriptar = document.querySelector(".etiqueta-encriptar")
let seleccion_clave = document.getElementById("clave").value
/* Crear el evento para el boton traducir: obtener el input.value, traducir, y mostrar el mensaje en el div: */

let encriptar = boton_encriptar.checked

boton_encriptar.addEventListener("change", ()=>{
    encriptar = !encriptar
    if(encriptar){
        etiqueta_desencriptar.classList.remove("etiqueta-active-des")
        etiqueta_encriptar.classList.add("etiqueta-active-en")
    }else{
        etiqueta_encriptar.classList.remove("etiqueta-active-en")
        etiqueta_desencriptar.classList.add("etiqueta-active-des")
    }
})

boton_traducir.addEventListener("click", ()=>{
    let mensaje = input.value
    if (encriptar){
        output.textContent = murcielago_encriptar(mensaje)
    }else{
        output.textContent = murcielago_desencriptar(mensaje)
    }
})