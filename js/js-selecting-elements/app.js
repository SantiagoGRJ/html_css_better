const myFor = document.getElementById("demo")
const intro = document.getElementById("intro") 
const introo=document.getElementsByTagName("p") /** array list to access by position number  */
const introClass = document.getElementsByClassName("introo")  /** array list to access by position number */
const querySelector = document.querySelectorAll(".demo") /** array list to access by position number */
const x = document.querySelectorAll("p.intro")
myFor.innerHTML="Hello Wordl!"  
intro.innerHTML="Introo"
introo[2].innerHTML="Tag Name"
introClass[0].innerHTML="Intro Class"

querySelector[0].innerHTML="First"

const form = document.forms["frm1"]

let text = ""
for(let i = 0; i <  form.length; i++){
    text+=form.elements[i].value + "<br>"
}
document.getElementById("memoform").innerHTML=text


