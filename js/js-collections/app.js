/* The following code selects all p elements in document */
const myCollection = document.getElementsByTagName("p")

console.log(myCollection.length);


for(let i = 0; i<myCollection.length; i++){
    myCollection[i].style.color="red"
}
