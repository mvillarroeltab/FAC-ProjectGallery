function myFunction(id) {
  var element = document.getElementById("description-p"+id);
  element.classList.add("description-display"+id);
  console.log ("hello");
}
function myFunction2(id) {
  var element = document.getElementById("description-display"+id);
  element.classList.add("description-p"+id);
  console.log ("hello");
}
