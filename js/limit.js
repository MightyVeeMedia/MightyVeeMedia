/*Limit Reached Script */
function validateForm() {
  var x = document.forms["reqform"]["os2"].value;
  if (x.includes("Lyons") || x.includes("SoniKKnine")) {
    alert("Oops! Request limit has been reached! Try again next week!");
    return false;
  }
}
