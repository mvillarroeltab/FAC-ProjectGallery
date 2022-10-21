function myButton(id){
var Bttn = document.getElementById("button"+id);
}

function myFunction(id) {
  var element = document.getElementById("description-p"+id);
  element.classList.add("description-display"+id);
  console.log ("hello");
}

Bttn.addEventListener('click', myFunction);
Bttn.removeEventListener('click', myFunction);
