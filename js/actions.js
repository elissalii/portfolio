document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.NOAA, .affinity, .sweetli');

    projectImages.forEach(imageContainer => {
        const overlay = imageContainer.querySelector('.overlay');
        console.log('Overlay found:', overlay);  // Debug: Check if overlays are correctly found

        imageContainer.addEventListener('mouseenter', function() {
            console.log('Mouse entered');  // Debug: Verify event trigger
            overlay.style.opacity = '1';
        });

        imageContainer.addEventListener('mouseleave', function() {
            console.log('Mouse left');  // Debug: Verify event trigger
            overlay.style.opacity = '0';
        });
    });
});