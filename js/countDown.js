document.addEventListener('DOMContentLoaded', function() {
    
    // Set the date we're counting down to (replace with your sweepstakes end date)
    const countDownDate = new Date("2024-12-17T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        // If it's the last day, hide days and show only hours, minutes, and seconds
        if (days === 0) {
            document.getElementById("days").parentElement.style.display = "none";
            document.getElementById("hours").parentElement.style.display = "flex";
        } else {
            document.getElementById("days").parentElement.style.display = "flex";
            document.getElementById("hours").parentElement.style.display = "flex";
        }

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "<h2>Sweepstakes has ended!</h2>";
        }
    }

    // Update the countdown every second
    const countdownTimer = setInterval(updateCountdown, 1000);

    // Initial call to set the correct display immediately
    updateCountdown();
    
});