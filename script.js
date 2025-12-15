function startTimer(duration, display) {
  let timer = duration;
  setInterval(() => {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) timer = duration;
  }, 1000);
}

window.onload = () => {
  const display = document.getElementById("timer");
  startTimer(59, display);
};
