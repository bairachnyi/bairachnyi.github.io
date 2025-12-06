document.addEventListener('DOMContentLoaded', () => {
    const mobileTrigger = document.querySelector('.nav-mobile-trigger');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    const overlayLinks = document.querySelectorAll('.nav-overlay a');

    if (mobileTrigger && navOverlay) {
        // Toggle Menu
        mobileTrigger.addEventListener('click', () => {
            const isActive = navOverlay.classList.contains('active');

            if (!isActive) {
                navOverlay.classList.add('active');
                body.classList.add('nav-open');
                // Optional: Animate burger to X
                mobileTrigger.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                mobileTrigger.querySelectorAll('span')[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                closeMenu();
            }
        });

        // Close when clicking a link
        overlayLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        function closeMenu() {
            navOverlay.classList.remove('active');
            body.classList.remove('nav-open');
            // Reset burger
            mobileTrigger.querySelectorAll('span')[0].style.transform = 'none';
            mobileTrigger.querySelectorAll('span')[1].style.transform = 'none';
        }
    }

    // Smooth Scroll (Native behavior is set in CSS, this is for older browsers fallback or custom logic)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Offset for fixed header
                const headerOffset = 60;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
