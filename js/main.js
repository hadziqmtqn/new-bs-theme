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
