const d = document;
export function countdown(count, date, message) {
    const endDate = new Date(date);
    let years, days, hours, minutes, seconds, interval;
    if (endDate <= Date.now()) {
        d.querySelector(count).innerHTML = `<h3>${message}</h3>`;
    } else {
        interval = setInterval(() => {
            const diffTime = Math.abs(endDate - Date.now());
            years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
            days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
            hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((diffTime % (1000 * 60)) / (1000));
            d.querySelector(count).innerHTML = `<h3>${years} years, ${days} days, ${hours} hours,
            ${minutes} minutes, ${seconds} seconds</h3>`;
        }, 1000);
    }
}