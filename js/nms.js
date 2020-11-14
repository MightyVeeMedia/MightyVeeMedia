/*Unusable Names Script */
function validateForm() {
  var x = document.forms["reqform"]["os2"].value;
  if (x.includes("BBT") || x.includes("bbt") || x.includes("mightyveemedia") || x.includes("mighty vee media") ||x.includes("Mighty Vee Media") || x.includes("MightyVeeMedia") || x.includes("bbt network") || x.includes("thisbarry") || x.includes("this barry") || x.includes("Billy Bob Tanley") || x.includes("billy bob tanley") || x.includes("BBT Network") || x.includes("ThisBarry") || x.includes("This Barry") || x.includes("Otis") || x.includes("Bubba Dunk Funkin") || x.includes("BDF") || x.includes("BDF Network") || x.includes("Steve the Darkness")|| x.includes("STD")|| x.includes("Green Psycho 17")|| x.includes("Green Psycho")|| x.includes("Jeffrey Gaggens")|| x.includes("JeffreyGaggens")|| x.includes("Proto Vee")|| x.includes("ProtoVee")|| x.includes("Proto Mike V")|| x.includes("ProtoMikeV")|| x.includes("ProtoV")|| x.includes("BillyBobTanley")) {
    alert("The name entered cannot be used.");
    return false;
  }
}
