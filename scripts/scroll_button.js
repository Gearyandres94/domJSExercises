const d = document,
    w = window;
export function buttonTop(button) {
    w.addEventListener("scroll", () => {
        if (w.scrollY >= 300 && (d.querySelector(button).classList.contains("hidden"))) {
            d.querySelector(button).classList.toggle("hidden");
            d.addEventListener("click", e => {
                if (e.target.matches(button)) {
                    w.scrollTo({ behavior: "smooth", top: 0 })
                }
            })
        }
        else if (w.scrollY < 300 && !(d.querySelector(button).classList.contains("hidden"))) {
            d.querySelector(button).classList.toggle("hidden");
        }

    })

}