let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const lapList = document.getElementById("lapList");

function updateDisplay(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
  millisecondsEl.textContent = String(milliseconds).padStart(2, '0');
}

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(0);
  lapList.innerHTML = "";
  isRunning = false;
}

function recordLap() {
  if (!isRunning) return;
  const li = document.createElement("li");
  li.textContent = `${minutesEl.textContent}:${secondsEl.textContent}:${millisecondsEl.textContent}`;
  lapList.appendChild(li);
}
