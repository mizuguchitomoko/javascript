function hamburger() {
  document.getElementById("line1").classList.toggle("line_1");
  document.getElementById("line2").classList.toggle("line_2");
  document.getElementById("line3").classList.toggle("line_3");
  document.getElementById("nav").classList.toggle("in");
}
document.getElementById("hamburger").addEventListener("click", function () {
  hamburger();
});
const pics_src = ["cafe.jpg", "coffee.jpg", "beans.jpg"];
let num = -1;

function slideshow_timer() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 1500);
