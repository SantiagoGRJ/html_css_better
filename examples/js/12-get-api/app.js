

/* fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
*/

const request = async (url) => {
    let response = await fetch(url)
    if(!response.ok)
        throw new Error(response.status)
    return response.json()
}
const chuckApi = await request("https://api.chucknorris.io/jokes/categories")
console.log(chuckApi);

const rickyApi = await request("https://rickandmortyapi.com/api/character/2")
console.log(rickyApi);

const isResponseOK = (response) => {
        if(!response.ok)
        throw new Error(response.status)
     return response.json()
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => isResponseOK(response))
    .then(data => console.log(data))
    .catch(err => console.error(err.message))

