document.addEventListener('DOMContentLoaded', function() {
    // Fancybox Initialization
    Fancybox.bind("[data-fancybox]", {
        // Custom options
        dragToClose: true,
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [],
                right: ["rotateCCW", "rotateCW", "flipX", "flipY", "zoomIn", "zoomOut", "fullScreen", "close"],
            },
        },
        Image: {
            zoom: true,
        },
    });

    // Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // Check for URL parameter for initial filtering
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${filterParam}"]`);
        if (targetBtn) targetBtn.click();
    }
});