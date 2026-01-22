/**
 * Main JavaScript - Common functionality for all pages
 * Theme switcher and navbar collapse
 */

document.addEventListener('DOMContentLoaded', function () {

    // ===================================================================
    // THEME SWITCHER
    // ===================================================================
    const colorOptions = document.querySelectorAll('.color-option');
    const root = document.documentElement;

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));

            // Add active class to clicked option
            this.classList.add('active');

            // Get color data
            const primaryColor = this.getAttribute('data-primary');
            const lightColor = this.getAttribute('data-light');

            // Update CSS variables
            root.style.setProperty('--primary-color', primaryColor);
            root.style.setProperty('--primary-light', lightColor);

            // Update button shadow color (convert hex to rgba)
            const r = parseInt(primaryColor.slice(1, 3), 16);
            const g = parseInt(primaryColor.slice(3, 5), 16);
            const b = parseInt(primaryColor.slice(5, 7), 16);
            root.style.setProperty('--btn-primary-shadow', `rgba(${r}, ${g}, ${b}, 0.4)`);
        });
    });

    // ===================================================================
    // NAVBAR COLLAPSE ON MOBILE
    // ===================================================================
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.toggle();
            }
        });
    });

});
