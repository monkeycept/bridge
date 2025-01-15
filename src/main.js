let timer = document.getElementById('timer');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    let intervalId;
    let timeLeft = 0;

    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    startBtn.addEventListener('click', () => {
      if (!intervalId) {
        intervalId = setInterval(() => {
          timeLeft++;
          updateTimer();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
      }
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null;
      startBtn.disabled = false;
      stopBtn.disabled = true;
    });
