const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const body = document.body;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalColorChanging = null;
startButton.addEventListener("click", (e) => {
  intervalColorChanging = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  e.target.setAttribute("disabled", true);
});
stopButton.addEventListener("click", colorChangeStop);

function colorChangeStop() {
  clearInterval(intervalColorChanging);
  startButton.removeAttribute("disabled");
}
