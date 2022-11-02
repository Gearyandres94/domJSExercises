const d = document,
    w = window;

export default function responsive(resolution, id, mobileContent, desktopContent) {
    const $content = d.getElementById(id);

    const changeLinks = () => {
        if (w.innerWidth < resolution) {
            $content.innerHTML = mobileContent;
        }
        else {
            $content.innerHTML = desktopContent;
        }
    }
    changeLinks();


    window.addEventListener("resize", () => {

        changeLinks();
    })


}