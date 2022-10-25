import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./clock_and_alarm.js";
import { moveBall, shortcuts } from "./keyboard.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#btnClock1", "#btnClock2");
    alarm("../assets/alarm.mp3", "#btnClock3", "#btnClock4");
})

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})