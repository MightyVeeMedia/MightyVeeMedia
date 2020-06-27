/*Banned Users Script */
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "Brian Lyons" || x == "brianlyons" || x == "BrianLyons") {
    alert("We cannot currently process this donation.");
    return false;
  }
}

/*Banned Emails Script*/
function validateForm2() {
  var x = document.forms["myForm"]["email"].value;
  if (x == "AwesomeBro172@gmail.com" || x == "awesomebro172@gmail.com") {
    alert("We cannot currently process this donation.");
    return false;
  }
}
