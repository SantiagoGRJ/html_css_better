const myNodeList = document.querySelectorAll("p")

console.log(myNodeList[1]);
console.log(myNodeList.length);

for(let i=0; i<myNodeList.length; i++){
    myNodeList[i].style.color="red"
}