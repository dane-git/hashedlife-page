// Set the target date and time for the countdown (e.g., 7 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

// Update the countdown timer every second
const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-timer").innerHTML = "The site is now live!";
    }
}, 1000);
