let timer;
let isRunning = false;
let timeLeft = 1800; // Default to 30 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        timeLeft = (minutes * 60) + seconds; // Update timeLeft with input values
        updateDisplay();

        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert('Time is up!');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1800; // Reset to default 30 minutes
    minutesInput.value = '30';
    secondsInput.value = '0';
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();

// Hide loading screen once the page has loaded
window.addEventListener('load', () => {
    document.getElementById('loading-screen').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
});
        
