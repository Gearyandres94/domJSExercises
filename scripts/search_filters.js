const d = document;

export default function filters(input, elements) {
    const $input = d.getElementById(input),
        $elements = d.getElementsByClassName(elements);
    $input.addEventListener('input', e => {
        if (e.key === "Escape") e.target.value = "";
        for (let i = 0; i < $elements.length; i++) {
            !$elements[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? $elements[i].classList.add("filter")
                : $elements[i].classList.remove("filter");
        }
    })
}