
let timeInput;
function startTimer(event) {
  if (event.keyCode === 13) { 
    var input = document.getElementById("timer").value;
    var time = Math.floor(Number(input));
    if (isNaN(time)) {
      time = 0;
    }

    clearInterval(timeInput);
    document.getElementById("current-time").innerText = time;

    if (time > 0) {
      timeInput = setInterval(function() {
        time--;
        document.getElementById("current-time").innerText = time;
        if (time === 0) {
          clearInterval(timeInput);
        }
      }, 1000);
    }
  }
}