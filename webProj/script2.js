function createLocationElement(location) {
    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.setAttribute('id', location.id);

    const img = document.createElement('img');
    img.src = `${location.id}.avif`; 
    img.alt = location.name;

    locationElement.appendChild(img);

    return locationElement;
}

const map = document.querySelector('.map');

