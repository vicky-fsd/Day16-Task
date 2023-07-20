var countdown = (count, callback) => {
    var countdownDiv = document.getElementById("countdown");
  
    var updateCountdown = (currentCount) => {
      countdownDiv.textContent = currentCount;
      if (currentCount > 0) {
        setTimeout(() => updateCountdown(currentCount - 1), 1000);
      } else {
        callback();
      }
    };
  
    updateCountdown(count);
  };
  
  var displayMessage = () => {
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.textContent = "Happy Independence Day";
  };
  
  countdown(10, displayMessage);
  