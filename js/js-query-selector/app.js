/**
 * El metodo .querySelector devuelve el primer elemento que encuentra que encaja 
 * con el selector CSS indicado por parametro.
 */

const page = document.querySelector("#page") // <div id="page"></div>
const info = document.querySelector(".main .info") // <div class="info"></div> 


/** El metodo querySelector siempre devuelve un solo elemento: el primero que se encuentra 
 * En el caso de no coincidir con ninguno, devuelve NULL.
 */

/** Obtiene todos los elementos con clase "info" */
const infos = document.querySelectorAll("info")
/** Obtiene todos los elementos con atributo name="nickname" */
const nicknames = document.querySelectorAll('[name="nickname"]')
/** Obtiene todos los elementos div de la página HTML */
const divs = document.querySelectorAll("div")

/**
 * El método .querySelectorAll() siempre nos devolverá un  de elementos. 
 * En el caso de no encontrar ninguna coincidencia, nos devolverá un array de 0 elementos.
 */


/** Busqueda Acotada  */

const menu = document.querySelector("#menu")
const links = menu.querySelectorAll("a")

/** Sin embargo, si controlamos un poco de CSS,
 * y nos interesa únicamente el elemento final,
 * puede ser mucho más sencillo realizar lo siguiente
 */

const linkss = document.querySelectorAll("#menu a")

