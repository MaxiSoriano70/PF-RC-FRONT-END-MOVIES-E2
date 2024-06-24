function AppSeries() {}

AppSeries.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = carruselList.querySelector('#track-serie');
    const carrusel = track.querySelectorAll('.card-serie-carrusel');

    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left.slice(0, -2)) * -1;

    if (btn.dataset.button === "button-prev") {
        this.prevAction(leftPosition, carruselWidth, track);
    } else {
        this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
};

AppSeries.prototype.prevAction = function (leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
};

AppSeries.prototype.nextAction = function (leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
};