/*Limit Reached Script */
function validateForm() {
  var x = document.forms["reqform"]["os2"].value;
  if (x.includes("Lyons") || x.includes("duf") || x.includes("Augello") || x.includes("augello")) {
    alert("Oops! Request could not be processed! Try again later!");
    return false;
  }
}
