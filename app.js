
let is24Hour = false;

function updateTime() {
    const options = {
        timeZone: 'Asia/Shanghai',
        hour12: !is24Hour
    };

    const currentTime = new Date();

    const beijingTime = currentTime.toLocaleTimeString('en-US', options);
    options.timeZone = 'America/Chicago';
    const chicagoTime = currentTime.toLocaleTimeString('en-US', options);

    document.getElementById('beijing-time').textContent = beijingTime;
    document.getElementById('chicago-time').textContent = chicagoTime;
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
