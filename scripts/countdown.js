const d = document;
export function countdown(count, date, message) {
    const endDate = new Date(date).getTime();

    let days, hours, minutes, seconds, interval;

    interval = setInterval(() => {
        const diffTime = Math.abs(endDate - Date.now());

        days = Math.floor((diffTime / (1000 * 60 * 60 * 24)));

        hours = ("0" + Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);

        minutes = ("0" + Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);

        seconds = ("0" + Math.floor((diffTime % (1000 * 60)) / (1000))).slice(-2);

        d.querySelector(count).innerHTML = `<h3>${days} days, ${hours} hours,
            ${minutes} minutes, ${seconds} seconds</h3>`;

    }, 1000);

    if (Math.abs(endDate - Date.now()) <= 0) {

        clearInterval(interval);

        d.querySelector(count).innerHTML = `<h3>${message}</h3>`;

    }
}