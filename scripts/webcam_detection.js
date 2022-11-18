const d = document,
    n = navigator;
export default function webCam(id) {
    const $video = d.getElementById(id);
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then(stream => {
                console.log(stream)
                $video.srcObject = stream;
                $video.onplay();
            })
            .catch(err => {
                $video.insertAdjacentHTML("beforebegin", `ERROR: <p><mark>${err}</mark></p>`);
                console.log(`ERROR: ${err}`)
            });
    }
}