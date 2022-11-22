const d = document;

export default function draw(btn, list) {
    const $list = d.querySelectorAll(list);
    d.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            let winner = $list[Math.floor(Math.random() * ($list.length - 1))];
            alert(`The winner is ${winner.textContent}`);
        }
    })

}