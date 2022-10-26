export function startTime(closed) {
  let timeContainer = document.getElementById("time-value");
  let timer = localStorage.getItem("timeValue");
  closed = closed? closed : false;
  if (!closed) {
    var timerInterval = setInterval(() => {
      timeContainer.innerHTML = `${timer}`;
      timer--;
    }, 1000)} else {
    clearInterval(timerInterval);
  }
}

