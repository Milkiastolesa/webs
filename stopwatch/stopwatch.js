let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
});
