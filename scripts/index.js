import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./clock_and_alarm.js";
import { moveBall, shortcuts } from "./keyboard.js";
import { countdown } from "./countdown.js";
import { buttonTop } from "./scroll_button.js";
import { darkTheme } from "./dark_theme.js";
import responsiveMedia from "./responsive_javascript.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./device_detection.js";
import networkStatus from "./connection_detection.js";
import webCam from "./webcam_detection.js";
import getGeolocation from "./geolocation.js";
import filters from "./search_filters.js";
import draw from "./digital_lottery.js";


const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#btnClock1", "#btnClock2");
    alarm("../assets/alarm.mp3", "#btnClock3", "#btnClock4");
    countdown(".count", "2025-01-01", "Countdown finished")
    buttonTop(".btnScroll");
    darkTheme(".btn-dark-mode", "dark-theme");
    responsiveMedia("1024", "video01", `<a href=https://www.youtube.com/embed/2SetvwBV-SU>Get Video Here</a>`, `<iframe width="600" height="450" src="https://www.youtube.com/embed/2SetvwBV-SU"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `);
    responsiveMedia("1024", "map01", `<a href=https://www.google.com/maps?ll=39.173281,-5.12019&z=8&t=m&hl=es-419&gl=AR&mapclient=embed>Get Map Here</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d791824.2177375586!2d-5.120190204152909!3d39.17328052081517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1666891805574!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("form-responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocationDiv");
    filters("search-input", "card");
    draw("#lottery-btn", ".player");
})

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})
networkStatus();
