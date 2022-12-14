const d = document,
    w = window;

export default function scrollSpy() {
    if (w.innerWidth >= 1024) {
        const section = d.querySelectorAll('section'),
            navLinks = d.querySelectorAll('aside nav a');

        w.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY,
                    offset = sec.offsetTop,
                    height = sec.offsetHeight,
                    id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        d.querySelector('aside nav a[href*=' + id + ']').classList.add('active');
                    });
                };

            })

        }
    }
}