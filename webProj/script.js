document.addEventListener("DOMContentLoaded", function() {
    // Get all image elements within the main content area
    const images = document.querySelectorAll('.leftContainer img, .rightContainer img, .leftContainer2 img, .rightContainer2 img');

    // Loop through each image and add event listeners for hover
    images.forEach(image => {
        // Find the corresponding figcaption element for the current image
        const caption = image.parentElement.nextElementSibling;

        // Initialize the default state of the caption
        caption.style.maxHeight = '0';
        caption.style.overflow = 'hidden';
        caption.style.transition = 'max-height 0.5s ease-in-out'; // Slower and smoother animation

        // Add event listener for mouseenter (hover in)
        image.addEventListener('mouseenter', function() {
            // Slide down the caption by setting max-height to its scrollHeight
            caption.style.maxHeight = caption.scrollHeight + 'px';
        });

        // Add event listener for mouseleave (hover out)
        image.addEventListener('mouseleave', function() {
            // Slide up the caption by resetting max-height to 0
            caption.style.maxHeight = '0';
        });
    });
});
