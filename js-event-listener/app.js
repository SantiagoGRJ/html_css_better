const btn = document.getElementById("first")

btn.addEventListener("click", function(){
    alert("Hello World!!")
})

const btnParameter =  document.getElementById("btnParameter")
let p1=5
let p2=7

btnParameter.addEventListener("click", function(){
    myFunction(p1, p2)
})

function myFunction(a, b){
    document.getElementById("demo").innerHTML=a*b
}
