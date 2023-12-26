let timer;
let totalSeconds = 0;

function startTimer() {
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  totalSeconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (totalSeconds > 0) {
    totalSeconds--;
    updateDisplay();
  } else {
    clearInterval(timer);
  }
}

function updateDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
