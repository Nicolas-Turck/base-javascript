// create new element 
const newElt = document.createElement('p');
const newElt2 = document.createElement('div');
// search elemnt by ID
let elt = 
document.getElementById('main');
// add elemnt with appenChild
elt.appendChild(newElt);
elt.appendChild(newElt2);
// modify style of element
newElt.style.color = "green";
// add text in elemnt with innerHtml
newElt.innerHTML = "Mon <strong>grand</strong> contenu";
newElt2.innerHTML = "hello world";
// modify background color of element
newElt2.style.backgroundColor = "#000";
// delete element
elt.removeChild(newElt); 
// change element
elt.replaceChild(document.createElement("article"), newElt);    