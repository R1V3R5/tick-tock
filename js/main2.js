window.setTimeout(hexChange, 1000);

var newColor = function figureHex() {
  var newVar = Date.now();
  var hexNewVar = newVar.toString(16);
  var subHexVar = hexNewVar.substr(5, 20);
  console.log(subHexVar);
  return subHexVar;
};

var foo = document.getElementById("pageContainer");
var hexChange = foo.style.background = "#" + newColor();