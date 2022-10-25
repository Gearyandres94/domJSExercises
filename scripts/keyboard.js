const d = document;
let x = 0, y = 0;

export function shortcuts(e) {
    if (e.key === "a" && e.altKey) {
        alert("You have launched an alert with the keyboard")
    }
    if (e.key === "c" && e.altKey) {
        confirm("You have launched a confirm with the keyboard")
    }
    if (e.key === "p" && e.altKey) {
        prompt("You have launched a prompt with the keyboard")
    }
}

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

}