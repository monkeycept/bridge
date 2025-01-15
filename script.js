
    function startCountdown(targetDate) {
      const timerElement = document.getElementById('timer');
      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');

      const interval = setInterval(() =&gt; {
        const now = new Date();
        const difference = targetDate - now;

        if (difference &lt;= 0) {
          clearInterval(interval);
          timerElement.innerHTML = "Countdown Expired!";
          return;
        }

        const days = Math.floor(difference / (1000 * 60