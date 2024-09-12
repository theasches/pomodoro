let timer;
let isRunning = false;
let timeLeft = 1800; // Default to 30 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const loadingBar = document.getElementById('loading-bar');

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

        // Reset loading bar
        loadingBar.style.width = '0';
        const totalDuration = timeLeft;
        
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
                // Update loading bar
                const progress = ((totalDuration - timeLeft) / totalDuration) * 100;
                loadingBar.style.width = `${progress}%`;
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
    loadingBar.style.width = '0'; // Reset loading bar
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
                
