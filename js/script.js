document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('sticky-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    let isScrolled = false;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50 && !isScrolled) {
            header.classList.add('scrolled');
            isScrolled = true;
        } else if (window.scrollY <= 50 && isScrolled) {
            header.classList.remove('scrolled');
            isScrolled = false;
        }
    });

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Hide header when screen width is less than or equal to 50% of the page width
    function checkHeaderVisibility() {
        const pageWidth = document.documentElement.scrollWidth;
        const halfPageWidth = pageWidth / 2;
        
        if (window.innerWidth <= halfPageWidth) {
            header.style.display = 'none';
        } else {
            header.style.display = 'block';
        }
    }

    // Check on load and on resize
    window.addEventListener('load', checkHeaderVisibility);
    window.addEventListener('resize', checkHeaderVisibility);
    
    function adjustFooter() {
        const footer = document.getElementById('sticky-footer');
        const contentWrapper = document.querySelector('.content-wrapper');
        const windowHeight = window.innerHeight;
        const contentHeight = contentWrapper.offsetHeight;
        const footerHeight = footer.offsetHeight;

        // if (contentHeight + footerHeight > windowHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.width = '100%';
            contentWrapper.style.paddingBottom = footerHeight + 'px';
        // } else {
        //     footer.style.position = 'static';
        //     contentWrapper.style.paddingBottom = '0';
        // }
    }

    // Call the function initially and on window resize
    adjustFooter();
    window.addEventListener('resize', adjustFooter);

    // Call the function when the content might have changed (e.g., after loading images or dynamic content)
    window.addEventListener('load', adjustFooter);
    
});