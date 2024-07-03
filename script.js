function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').textContent = utcTime;
    document.getElementById('currentDay').textContent = dayOfWeek;
}

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000); // Update every second
};