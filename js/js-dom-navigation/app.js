const myTitle = document.getElementById("title-demo")

console.log(myTitle.firstChild.nodeValue);

/*
    parentNode
    childNodes [nodeNumber]
    firstChild
    lastChild
    nextSibling
    previusSibling
*/

 /* TYPE 01 */

// document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML

/* TYPE 02 */
// document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

/* TYPE 03 */
 document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;


/* DOCUMENT.BODY Y DOCUMENT.DOCUMENTELEMENT */

// document.getElementById("demo").innerHTML = document.body.innerHTML;

// document.getElementById("documentElement").innerHTML= document.documentElement.innerHTML;



/* The NodeName Property */ 

document.getElementById("id03").innerHTML = document.getElementById("id01").nodeName;


/* The NodeType */

document.getElementById("id04").innerHTML=document.getElementById("id01").nodeType;






