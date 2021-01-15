document.write('<img id = "rico" src = "rico.png">');
var y = 0;
var x = 0;

addEventListener("keydown", keydownfunc);

function keydownfunc(event) {
  var key_code = event.keyCode;

  if (key_code === 37) x -= 32;
  if (key_code === 38) y -= 32;
  if (key_code === 39) x += 32;
  if (key_code === 40) y += 32;

  document.getElementById("rico").style.top = y + "px";
  document.getElementById("rico").style.left = x + "px";
}
