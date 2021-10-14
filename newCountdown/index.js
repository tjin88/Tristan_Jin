const newYears = "30 Oct 2021";

function countdownTimer() {
    const daysE1 = document.getElementById("days");
    const hoursE1 = document.getElementById("hours");
    const minE1 = document.getElementById("min");
    const secE1 = document.getElementById("sec");

    console.log("daysE1: " + daysE1 + ", hoursE1: " + hoursE1 + ", minE1: " + minE1 + ", secE1: " + secE1)

    const nyd = new Date(newYears);
    const currentDate = new Date();
    const sec = (nyd-currentDate)/1000;
    console.log("nyd: " + nyd + ", currentDate: " + currentDate + ", sec: " + sec)

    const days = Math.floor(sec/3600/24);
    const hours = Math.floor(sec/3600)%24;
    const mins = Math.floor(sec/60)%60;
    const secs = Math.floor(sec)%60;
    console.log("days: " + days + ", hours: " + hours + ", mins: " + mins + ", secs: " + secs);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = format(hours);
    minE1.innerHTML = format(mins);
    secE1.innerHTML = format(secs);
}

function format(n) {
    return (n < 10) ? ("0" + n) : n
}

setInterval (() => {
    countdownTimer();
}, 1000);