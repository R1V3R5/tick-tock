var clock = document.querySelector("#tick-clock")

var tickClock = function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkHour(h);
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkHour(i) {
  if (i > 12) {
    i = "0" + (i - 12)
  } else if (i < 10) {
    i = "0" + i
  }

  return i;
};

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
};

tickClock()