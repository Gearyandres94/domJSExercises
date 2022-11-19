const d = document, n = navigator;
export default function getGeolocation(id) {
    const $geo = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    const success = position => {
        const lat = position.coords.latitude,
            long = position.coords.longitude;
        $geo.innerHTML = `<p>Latitude: ${lat}
            <br>Longitude: ${long}
            <br>Accuracy: More or Less ${position.coords.accuracy} meters </p>
        <br><a href="https://google.com/maps/@${lat},${long},19z"target="_blank" rel="noopener">See in Google Maps</a>`;
    }
    const showError = error => $geo.innerHTML = `<p><Mark>Error: ${error.message}</Mark></p>`;

    n.geolocation.getCurrentPosition(success, showError, options);




}