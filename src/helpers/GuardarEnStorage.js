export const GuardarEnStorage = (clave, elemento) => {
    //Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));//convertimos en un objt de JS
    //comprobar si es un array
    if( Array.isArray(elementos) ){
        //Añadir un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la peli nueva
        elementos = [elemento];
    }
    //Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    //Devolver objeto guardado
    return elemento;
    //localStorage.setItem('pelis',JSON.stringify([peli]));//convertimos en cadena de texto
}