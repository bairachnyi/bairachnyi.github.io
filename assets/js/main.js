document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileTrigger = document.querySelector('.nav-mobile-trigger');
    const navList = document.querySelector('.nav-list');

    // Check if elements exist before adding listeners
    if (mobileTrigger && navList) {
        mobileTrigger.addEventListener('click', () => {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';

            // Simple logic for now, ideally toggle a class for animation
            if (navList.style.display === 'flex') {
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '44px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = 'rgba(255,255,255,0.95)';
                navList.style.padding = '20px';
                navList.style.backdropFilter = 'blur(20px)';
            } else {
                navList.style = ''; // Reset inline styles
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 734 && mobileTrigger && navList.style.display === 'flex') {
                    mobileTrigger.click();
                }
            }
        });
    });
});
