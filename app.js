//primera_funcion();    // Tarea 1: Se ejecuta primero
//segunda_funcion();    // Tarea 2: Se ejecuta cuando termina primera_funcion()
//tercera_funcion();    // Tarea 3: Se ejecuta cuando termina segunda_funcion()


// CALLBACKS
const letters = ["A","B","C"]

for(let pos=0; pos< letters.length;pos++){ 
    const letter =  letters[pos]
    console.log(`pos=${pos} letter=${letter}`);
}
/**
 * En la variable pos tenemos la posición del array que estamos recorriendo. 
 * Este valor irá desde 0 hasta 2, mientras que en letter guardamos letters[pos], 
 * es decir, la posición en el array, obteniendo el elemento, es decir, desde A hasta C:
 */

/**
 * Ahora veamos, como podemos hacer este mismo bucle utilizando el método forEach() del
 * array al cuál le pasamos una función callback. La función callback es action() y ten
 * en cuenta que los parámetros element e index son parámetros especiales al ser una
 * función callback
 */

function action(element,index){
    console.log(`pos=${index} letter=${element}`);
}
letters.forEach(action)

// Esto se suele reescribir habitualmente de la siguiente forma

letters.forEach((element,index)=>{
    console.log(`pos=${index} letter=${element}`);
})
