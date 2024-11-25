function showImage(index) {
    const dots = document.querySelectorAll('.dot');
    const images = document.querySelectorAll('.maingallery');

    if (index < 0 || index >= images.length) return;

    // Highlight the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Scroll to the selected image or focus
    images[index].scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;

    // Initial activation
    showImage(currentImageIndex);
});
