function murcielago_encriptar(mensaje){

    for (let i of mensaje){
        if (i == "m" || i == "M"){mensaje = mensaje.replace(i, "0");} 
        if (i == "u" || i == "U" || i == "ú" || i == "Ú"|| i == "Ü" || i == "ü"){mensaje = mensaje.replace(i, "1");} 
        if (i == "r" || i == "R"){mensaje = mensaje.replace(i, "2");} 
        if (i == "c" || i == "C"){mensaje = mensaje.replace(i, "3");} 
        if (i == "i" || i == "I" || i == "í" || i == "Í"){mensaje = mensaje.replace(i, "4");} 
        if (i == "e" || i == "E" || i == "é" || i == "É"){mensaje = mensaje.replace(i, "5");} 
        if (i == "l" || i == "L"){mensaje = mensaje.replace(i, "6");} 
        if (i == "a" || i == "A" || i == "á" || i == "Á"){mensaje = mensaje.replace(i, "7");} 
        if (i == "g" || i == "G"){mensaje = mensaje.replace(i, "8");} 
        if (i == "o" || i == "O" || i == "ó" || i == "Ó"){mensaje = mensaje.replace(i, "9");} 
    }

    return mensaje
}

function murcielago_desencriptar(mensaje){

    for (let i of mensaje){
        switch(i){
            case "0": 
                mensaje = mensaje.replace(i, "m");
                break
            case "1": 
                mensaje = mensaje.replace(i, "u");
                break
            case "2": 
                mensaje = mensaje.replace(i, "r");
                break
            case "3": 
                mensaje = mensaje.replace(i, "c");
                break
            case "4": 
                mensaje = mensaje.replace(i, "i");
                break
            case "5": 
                mensaje = mensaje.replace(i, "e");
                break
            case "6": 
                mensaje = mensaje.replace(i, "l");
                break
            case "7": 
                mensaje = mensaje.replace(i, "a");
                break
            case "8": 
                mensaje = mensaje.replace(i, "g");
                break
            case "9": 
                mensaje = mensaje.replace(i, "o");
                break
        }
    }

    return mensaje
}

export {murcielago_encriptar, murcielago_desencriptar}