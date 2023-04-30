/* Lo primero que se intento fue con la funcion replace cambiar cada una de las vocales, pero ellas
iteran la una sobre la otra, haciendo la encriptacion mas complicada
averiguando un poco se puede hacer una tabla de constantes */

const tablaEncriptacion = {
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
};

function encriptarTexto() {
    var textoLimpio = document.getElementById("textToEncritp").value;
    var textoEncriptado = ''; // Creamos una cadena de texto vacia para luego irla manipulando.
    var img = document.getElementById("imgChange");
    for (let index = 0; index < textoLimpio.length; index++) {
        const letra = textoLimpio[index].toLowerCase();//se recorre todo el string con el index como parametro para
        //recoger todas la lestras y hacer la evaluacion posterior
        const reemplazo = tablaEncriptacion[letra];//basado en la tabla de constantes le pasamos como parametro la
        //variable letra con el porposito de buscarla en el listado y validar si hace parte de la regla de 
        //encriptacion
        textoEncriptado += reemplazo ? reemplazo : letra;
        //La expresion significa lo siguiente (si reemplazo tiene como valor algun caracter lo suma a textoEncriptado, en caso que no
        // agrega letra) es una condicional conocido como expresion terniaria que funciona de igual manera en java
    }
    document.getElementById("textoCript").innerHTML = textoEncriptado;//Asigno el resultado a la etiqueta que necesito en el HTML
    //window.alert(textoEncriptado); se uso esta funcion para validar cual era el output
    document.getElementById("textToEncritp").value = ""; //reseteo el input para no dejar rastro del texto inicial
    document.getElementById("textToEncritp").placeholder = "Ingrese el texto que desea encriptar o desencriptar";
    //hace parte del seteo anterior.
    document.getElementById("imgChange").style.display = "none";
    img.setAttribute("src","imagenes/diamod.svg");
}

/*Entonces para desencriptar es un poco mas complejo en la medida que debes encontrar el equivale que en termino de cadena 
es mas largo, se me ocurre usar la misma logica de las vocales para predecir la cantidad de caracteres que le siguen a 
continuacion con eso se salta los caracteres y devulve el texto que necesita */

function desencriptarTexto(){
    var textoLimpio = document.getElementById("textToEncritp").value;
    var textoEncriptado = ''; // Creamos una cadena de texto vacia para luego irla manipulando.
    for (let index = 0; index < textoLimpio.length; index++) {
        const letra = textoLimpio[index].toLowerCase();
        const numReemplazo = tablaEncriptacion[letra]; 
        if (numReemplazo == undefined) {
            textoEncriptado += letra;
        }
        if (numReemplazo != undefined) {
            textoEncriptado += letra;
            index += ((numReemplazo.length) - 1);
        }
    }
    document.getElementById("textDesencriptado").innerHTML = textoEncriptado;//Asigno el resultado a la etiqueta que necesito en el HTML
    //window.alert(textoEncriptado); se uso esta funcion para validar cual era el output
    document.getElementById("textToEncritp").value = ""; //reseteo el input para no dejar rastro del texto inicial
    document.getElementById("textToEncritp").placeholder = "Ingrese el texto que desea encriptar o desencriptar";
    //hace parte del seteo anterior.
}
