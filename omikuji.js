document.getElementById("omikuji_btn").onclick = function () {
  var rnd = Math.floor(Math.random() * 6);
  var omikuji;
  if (rnd === 0) omikuji = "大吉";
  if (rnd === 1) omikuji = "吉";
  if (rnd === 2) omikuji = "小吉";
  if (rnd === 3) omikuji = "中吉";
  if (rnd === 4) omikuji = "大凶";
  if (rnd === 5) omikuji = "末吉";
  if (rnd === 6) omikuji = "凶";
  alert(omikuji);
};
