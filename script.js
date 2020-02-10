var span = document.getElementById('time');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if (s < 10) {
	s = "0" + s;
  }
  if (m < 10) {
	m = "0" + m;
  }
  if (h < 10) {
	h = "0" + h;
  }
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);