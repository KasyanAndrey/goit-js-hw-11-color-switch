const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  bodyEl: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    let randomIdx = randomIntegerFromInterval(0, colors.length);
    colors.forEach((num, idx) => {
      if (randomIdx === idx) {
        refs.bodyEl.style.backgroundColor = `${num}`;
        refs.startBtn.setAttribute("disabled", true);
      }
    });
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute("disabled");
});
