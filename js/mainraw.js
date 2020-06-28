/*Banned Users Script */
function validateForm() {
  var x = document.forms["reqform"]["os2"].value;
  if (x.includes("Lyons") || x.includes("Marsh")) {
    alert("Oops! We cannot currently process this request.");
    return false;
  }
}


/*Banned Users Script */
function validateForm() {
  var x = document.forms["reqform"]["os2"].value;
  if (x.includes("Lyons")) {
    alert("Oops! We cannot currently process this request.");
    return false;
  }
}

/* Test Function
alert("Form Updated!");
*/
