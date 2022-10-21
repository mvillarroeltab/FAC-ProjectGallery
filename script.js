function myButton(id){
var Bttn = document.getElementById("button"+id);
}

function myFunction(id) {
  var element = document.getElementById("description-p"+id);
  element.classList.add("description-display"+id);
  console.log ("hello");
}

button1.addEventListener('click', myFunction(1));
button2.addEventListener('click', myFunction(2));
button3.addEventListener('click', myFunction(3));
