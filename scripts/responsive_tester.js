const d = document;
export default function responsiveTester(idForm) {
    const $form = d.getElementById(idForm);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open($form.address.value, "tester", `innerWidth=${$form.width.value},
            innerHeight=${$form.height.value}`);
        }
    })
    d.addEventListener("click", e => {
        if (e.target === $form.close) tester.close();
    })
}