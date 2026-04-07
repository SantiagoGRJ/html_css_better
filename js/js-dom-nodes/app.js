const parent = document.getElementById("div1")
const para = document.createElement("p")
const node = document.createTextNode("This is new.")

const paragraph = document.createElement("p")
const textParagraph = document.createTextNode("This is Second New")

const paraReplacement = document.createElement("p")
const textParaReplacement = document.createTextNode("This is a new Replacement Text")


const child = document.getElementById("p1")
const secondChild = document.getElementById("p2")
const threeChild = document.getElementById("p3")


para.appendChild(node);


parent.appendChild(para);

paraReplacement.appendChild(textParaReplacement)



paragraph.appendChild(textParagraph)

parent.insertBefore(paragraph,child)


secondChild.remove()
//parent.removeChild(threeChild)
threeChild.parentNode.removeChild(threeChild)

parent.replaceChild(paraReplacement,child)



