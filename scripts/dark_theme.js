const d = document,
    ls = localStorage;
export function darkTheme(btn, classDark) {
    const $btn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"), darkModeOn = ls.getItem('darkModeOn');
    let moon = "🌙", sun = "☀️";

    if (darkModeOn === 'dark') {
        $selectors.forEach(el =>
            el.classList.add(classDark)
        );
        $btn.textContent = sun;
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($btn.textContent === moon) {
                $selectors.forEach(el =>
                    el.classList.add(classDark)
                );
                $btn.textContent = sun;
                ls.setItem('darkModeOn', 'dark');
            }
            else {
                $selectors.forEach(el =>
                    el.classList.remove(classDark)
                );
                $btn.textContent = moon;
                ls.setItem('darkModeOn', 'light');
            }
        }

    })
}