const diasEl = document.querySelector("#dias");
const horasEl = document.querySelector("#horas");
const minutosEl = document.querySelector("#minutos");
const segundosEl = document.querySelector("#segundos");

// fecha input
const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  diasEl.innerHTML = days;
  horasEl.innerHTML = formatTime(hours);
  minutosEl.innerHTML = formatTime(minutes);
  segundosEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// llamada inicial
countdown();

setInterval(countdown, 1000);
