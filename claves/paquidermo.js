function paquidermo_encriptar(mensaje){

    for (i of mensaje){
        switch(i){
            case "p": 
                mensaje = mensaje.replace(i, "0");
                break
            case "a": 
                mensaje = mensaje.replace(i, "1");
                break
            case "q": 
                mensaje = mensaje.replace(i, "2");
                break
            case "u": 
                mensaje = mensaje.replace(i, "3");
                break
            case "i": 
                mensaje = mensaje.replace(i, "4");
                break
            case "d": 
                mensaje = mensaje.replace(i, "5");
                break
            case "e": 
                mensaje = mensaje.replace(i, "6");
                break
            case "r": 
                mensaje = mensaje.replace(i, "7");
                break
            case "m": 
                mensaje = mensaje.replace(i, "8");
                break
            case "o": 
                mensaje = mensaje.replace(i, "9");
                break
        }
    }

    return mensaje
}

function paquidermo_desencriptar(mensaje){

    for (i of mensaje){
        switch(i){
            case "0": 
                mensaje = mensaje.replace(i, "p");
                break
            case "1": 
                mensaje = mensaje.replace(i, "a");
                break
            case "2": 
                mensaje = mensaje.replace(i, "q");
                break
            case "3": 
                mensaje = mensaje.replace(i, "u");
                break
            case "4": 
                mensaje = mensaje.replace(i, "i");
                break
            case "5": 
                mensaje = mensaje.replace(i, "d");
                break
            case "6": 
                mensaje = mensaje.replace(i, "e");
                break
            case "7": 
                mensaje = mensaje.replace(i, "r");
                break
            case "8": 
                mensaje = mensaje.replace(i, "m");
                break
            case "9": 
                mensaje = mensaje.replace(i, "o");
                break
        }
    }

    return mensaje
}