document.addEventListener('DOMContentLoaded', function() {
    const lat = 36.511673350759985;
    const lon = -4.6774350729758565;
    
    const map = L.map('map', {
        center: [lat, lon],
        zoom: 16,
        zoomControl: true,
        dragging: true,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup('I.E.S. Torre Almenara')
        .openPopup();
});