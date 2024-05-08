// No need for the locations array and descriptions in JavaScript

function createLocationElement(location) {
    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.setAttribute('id', location.id);

    const img = document.createElement('img');
    img.src = `${location.id}.avif`; // Assuming image filenames match location IDs
    img.alt = location.name;

    // No need to create location info here, as it's already in HTML

    locationElement.appendChild(img);

    return locationElement;
}

const map = document.querySelector('.map');
// No need to iterate over locations and create elements here, as they're already in HTML
