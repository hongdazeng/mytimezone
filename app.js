
let is24Hour = false;

function updateTime() {
    const options = {
        timeZone: 'Asia/Shanghai',
        hour12: !is24Hour
    };

    const currentTime = new Date();

    // Get date and time for Beijing
    const beijingDate = currentTime.toLocaleDateString('en-US', { timeZone: 'Asia/Shanghai', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const beijingTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById('beijing-time').textContent = `${beijingDate}, ${beijingTime}`;

    // Get date and time for Chicago
    options.timeZone = 'America/Chicago';
    const chicagoDate = currentTime.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const chicagoTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById('chicago-time').textContent = `${chicagoDate}, ${chicagoTime}`;
}

document.getElementById('toggle-format').addEventListener('click', function() {
    is24Hour = !is24Hour;
    if (is24Hour) {
        this.textContent = "Switch to 12-Hour Format";
    } else {
        this.textContent = "Switch to 24-Hour Format";
    }
    updateTime();
});

// Update the time immediately on page load and then every second
updateTime();
setInterval(updateTime, 1000);
