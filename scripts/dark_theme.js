const d = document;
export function darkTheme(btn, classDark) {
    const $btn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙", sun = "☀️";
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($btn.textContent === moon) {
                $selectors.forEach(el =>
                    el.classList.add(classDark)
                );
                $btn.textContent = sun;
            }
            else {
                $selectors.forEach(el =>
                    el.classList.remove(classDark)
                );
                $btn.textContent = moon;
            }
        }

    })
}