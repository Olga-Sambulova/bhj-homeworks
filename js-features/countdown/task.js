let timerElement = document.getElementById('timer');
let secondsLeft = parseInt(timerElement.textContent);

function updateTimer() {
    if (secondsLeft > 0) {
        secondsLeft--;
        timerElement.textContent = secondsLeft;
    }
    
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

let timerInterval = setInterval(updateTimer, 1000);