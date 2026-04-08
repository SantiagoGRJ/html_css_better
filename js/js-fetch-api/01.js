const promise = fetch("/information.txt")
promise.then(function (response) {

})

fetch("/information.txt")
    .then(function (response) {
        /* codigo que procesa */
    })

/* OPCIONES DE FETCH */

/**
 * En este ejemplo, estamos enviando una peticion POST,
 * indicando en la cabezera que se envía contenido JSON
 * y en el cuerpo de los datos, enviando el objeto JsonData, 
 * codificado como texto mediante stringify.
 */
const options = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(jsonData)
}
fetch('/robots.txt', options)
    .then(response => response.text())
    .then(data => {
        /* Processing data */
    })

/* Object headers */

const headers = new Headers()
headers.has("Content-Type")
headers.get("Content-Type")
headers.set("Content-Type", "application/json")
headers.set("Content-Encoding", "br")
headers.append("Content-Type", "application/json")
headers.delete("Content-Type")


/* Response */
fetch('/information.txt', options)
    .then(response => response.text())
    .then(data => {
        /* processing data */
    })

/**  Property .ok the Response 
 * 
 * Tenemos una forma práctica y 
 * sencilla de comprobar si todo ha ido bien al realizar la petición
 */

fetch('/information.txt')
    .then(response => {
        if (response.ok) {
            return response.text()
        }
    })

/**
 * response.text(), este metodo indica que queremos procesar la respuesta
 * como datos textuales, por lo que dicho método devolverá una PROMISE
 * con los datos en texto plano, facilitando trabajar con ellos de forma manual.
 */

fetch('/information.txt')
    .then(response => response.text())
    .then(data => console.log(data));

/**
 * Tras procesar la respuesta con response.text(), devolvemos una 
 * PROMISE con el contenido en texto plano. Esta Promise se procesa en el segundo
 * .then(), donde gestionamos dicho contenido almacenado en data.
 */

/**
 * Tenemos varios metodos similares para procesar las respuestas. Por ejemplo,
 * el caso anterior utilizando el metodo response.json() en lugar de reponse.text()
 * sería equivalente al siguiente fragmento
 */

fetch('/information.txt')
    .then(response => response.text())
    .then(data => {
        const json = JSON.parse(data)
        console.log(json);
    })

/**
 * Como se puede ver, con response.json() nos ahorraríamos tener que hacer el
 * JSON.parse() de forma manual, por lo que el código es algo más directo.
 */


/** Promesas usando .then() 
 
*   Comprobamos que la peticion es correcta con response.ok

*   Utilizamos response.text() para procesarla

*   En el caso de producirse algún error, lanzamos con el código de error

*   Procesamos los datos y los mostramos en la consola

*   En el caso de que la PROMISE sea rechazada, capturamos el error con el catch

*   Si ocurre un error 404, 500 o similar, lanzamos error con throw para capturarlo en el catch
*/

fetch('/information.txt')
    .then(response => {
        if (response.ok)
            return response.text()

        throw new Error(response.status)
    })
    .then(data => {
        console.log("Datos: " + data);
    })
    .catch(err => {
        console.error("Error: ", err.message);

    })

/** 
 * Podemos refactorizar un poco este ejemplo para hacerlo mas 
 * legible. Creamos la función isResponseOk() para procesar la respuesta 
 * (Invirtiendo el condional para hacerlo mas directo)
 * Luego, los .then y catch() los utilizamos con una arrow function para
 * simplificarlos. 
 */

const isResponseOk = (response) => {
    if (!response.ok) {
        throw new Error(response.status)
    }
    return response.text()
}
fetch("/information.text")
    .then(response => isResponseOk(response))
    .then(data => console.log("Datos: ", data))
    .catch(err => console.error("Error: ", err.message));

/**
 * Creamos una funcion request(url) que definimos con async
 * llamamos a fetch utilizando await para esperar y resolver la promesa
 * comprobamos si todo ha ido bien usando response.ok
 * llamamos a response.text() utilizando await y devolvemos el resultado
 */

const request = async (url) => {
    const response = await fetch(url)
    if(!request.ok)
        throw new Error("warn",response.status)
    const data = await response.text()
    return data
}
const resultOk = await request("/information.txt")
const resultError = await request("/noExistentFile.txt")